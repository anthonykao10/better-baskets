import helpers

testCoords = [ [79,381],[106,350],[141,326],[181,290],[236,316],[274,307],[321,314],[367,318],[411,324],[465,318],[515,300],[570,285],[628,274],[682,250],[741,245],[794,233],[848,236],[895,251],[947,255],[1000,252],[1033,316],[1069,361] ]

def test_getXVals():
  assert helpers.getXVals(testCoords) == [79, 106, 141, 181, 236, 274, 321, 367, 411, 465, 515, 570, 628, 682, 741, 794, 848, 895, 947, 1000, 1033, 1069]

def test_getYVals():
  assert helpers.getYVals(testCoords, 720) == [339, 370, 394, 430, 404, 413, 406, 402, 396, 402, 420, 435, 446, 470, 475, 487, 484, 469, 465, 468, 404, 359]

def test_getArc():
  xVals = helpers.getXVals(testCoords)
  yVals = helpers.getYVals(testCoords, 720)
  assert helpers.getArc(xVals, yVals) == [330.2698234321775, 0.34583816370993475, -0.00024040241876043645]

if __name__ == "__main__":
    test_getXVals()
    test_getYVals()
    test_getArc()
    print("all green")
