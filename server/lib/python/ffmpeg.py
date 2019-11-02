
import ffmpy

ff = ffmpy.FFmpeg(
  inputs={'videos/uploads/processedVideo.mp4': None},
  outputs={'videos/uploads/processedVideo.webm': '-y'}
)
ff.run()