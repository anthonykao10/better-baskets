import sys
sys.path.append('/usr/local/lib/python2.7/site-packages')
import os
from collections import deque
from imutils.video import VideoStream
import numpy as np
import argparse
import cv2
import imutils
import time
import json
import helpers


# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-v", "--video")
ap.add_argument("-b", "--buffer", type=int, default=100)
args = vars(ap.parse_args())

# set lower and upper bounds for mask
MASK_LOWER = (25, 93, 101)
MASK_UPPER = (55, 255, 255)

success = False
tracking = False
stopTracking = False

Y_THRESHOLD = 400
X_THRESHOLD = 1050

# Y_THRESHOLD_START = 400
# Y_THRESHOLD_END = 350

OUTER_BOX_X1 = 1000
OUTER_BOX_X2 = 1100
OUTER_BOX_Y1 = 350
OUTER_BOX_Y2 = 450

INNER_BOX_X1 = 1030
INNER_BOX_X2 = 1070
INNER_BOX_Y1 = 380
INNER_BOX_Y2 = 420

SUCCESS_X1 = 1020
SUCCESS_X2 = 1080
SUCCESS_Y1 = 370
SUCCESS_Y2 = 430

SCREEN_RES_Y = 720

# initialize list of coordinates
pts = deque(maxlen=args["buffer"])

# read video file
vs = cv2.VideoCapture(args["video"])

# initialize video out
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
path = os.path.dirname(os.path.realpath(__file__)) + '/../../videos/uploads/processedVideo.mp4'
writer = cv2.VideoWriter(path, fourcc, int(vs.get(5)), (int(vs.get(3)), int(vs.get(4))))

# allow the camera or video file to warm up
time.sleep(2.0)

while True:
	frame = vs.read()

	# handle the frame from VideoCapture or VideoStream
	frame = frame[1] if args.get("video", False) else frame

	# if we are viewing a video and we did not grab a frame,
	# then we have reached the end of the video
	if frame is None:
		break

	# resize the frame, blur it, and convert it to the HSV
	# color space
	frame = imutils.resize(frame, width=1200)
	blurred = cv2.GaussianBlur(frame, (11, 11), 0)
	hsv = cv2.cvtColor(blurred, cv2.COLOR_BGR2HSV)

	# draw success box
	cv2.rectangle(frame,(OUTER_BOX_X1,OUTER_BOX_Y1),(OUTER_BOX_X2,OUTER_BOX_Y2),(0,255,0),3)
	cv2.rectangle(frame,(INNER_BOX_X1,INNER_BOX_Y1),(INNER_BOX_X2,INNER_BOX_Y2),(255,0,0),3)

	# create mask
	mask = cv2.inRange(hsv, MASK_LOWER, MASK_UPPER)

	# filter noise
	mask = cv2.erode(mask, None, iterations=2)
	mask = cv2.dilate(mask, None, iterations=2)
	kernel = np.ones((5,5),np.uint8)
	mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

	# find contours in the mask and initialize the current
	# (x, y) center of the ball
	cnts = cv2.findContours(mask.copy(), cv2.RETR_EXTERNAL,
		cv2.CHAIN_APPROX_SIMPLE)
	cnts = imutils.grab_contours(cnts)
	center = None

	# draw enclosing circle and centroid if contour found
	if len(cnts) > 0:
		c = max(cnts, key=cv2.contourArea)
		((x, y), radius) = cv2.minEnclosingCircle(c)
		M = cv2.moments(c)
		center = (int(M["m10"] / M["m00"]), int(M["m01"] / M["m00"]))

		if radius > 10:
			cv2.circle(frame, (int(x), int(y)), int(radius),
				(0, 255, 255), 2)
			cv2.circle(frame, center, 5, (0, 0, 255), -1)

	# *******************************************************
	# if center != None and center[1] < 350:
	#   pts.appendleft(center)

	# limit tracking area by X and Y thresholds
	if (center is not None and center[1] < Y_THRESHOLD and center[0] < X_THRESHOLD):
		if (tracking is False and center[1] < Y_THRESHOLD):
			# time.sleep(0.5)
			tracking = True

		if (tracking is True and stopTracking is False):
			pts.appendleft(center)
	
	if (center is not None and tracking is True and stopTracking is False and center[1] > Y_THRESHOLD):
		stopTracking = True
	# *******************************************************

	# draw shot arc by connecting tracked points
	for i in range(1, len(pts)):
		if pts[i - 1] is None or pts[i] is None:
			continue

		thickness = int(np.sqrt(args["buffer"] / float(i + 1)) * 2.5)
		cv2.line(frame, pts[i - 1], pts[i], (0, 0, 255), thickness)
	
	# write video
	frame = imutils.resize(frame, width=int(vs.get(3)))
	writer.write(frame)

# convert to list for seralization
output = []
for pt in pts:
	output.append(pt)

# get shot arc and shot angle:
x_vals = helpers.getXVals(output)
y_vals = helpers.getYVals(output, SCREEN_RES_Y)
arc = helpers.getArc(x_vals, y_vals)

# generate formatted coordinates
output = helpers.formatCoordinates(arc, 10, 1100)

if arc is not None:
	arcMax = helpers.getArcMax( arc[2], arc[1], arc[0] )
	angle = helpers.getArcAngle( arc[2], arc[1], arc[0] )

	# if helpers.checkSuccess(980, 1020, 280, 320, 720, arc):
	# 	success = True
	if helpers.checkSuccess(SUCCESS_X1, SUCCESS_X2, SUCCESS_Y1, SUCCESS_Y2, SCREEN_RES_Y, arc):
		success = True
else: 
	arcMax = None
	angle = None

sys.stdout.write(json.dumps({
	"coordinates": output,
	"arc": arc,
	"arcMax": arcMax,
	"angle": angle,
	"success": success
}))

# release file and write stream
vs.release()
writer.release()