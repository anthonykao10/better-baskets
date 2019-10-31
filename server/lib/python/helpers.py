import numpy.polynomial.polynomial as poly


testArr = [ [79,381],[106,350],[141,326],[181,290],[236,316],[274,307],[321,314],[367,318],[411,324],[465,318],[515,300],[570,285],[628,274],[682,250],[741,245],[794,233],[848,236],[895,251],[947,255],[1000,252],[1033,316],[1069,361] ]

def getXVals(coords):
  return map(lambda coord: coord[0], coords)

def getYVals(coords, res_height):
  return map( lambda coord: res_height - coord[1], coords )

xVals = getXVals(testArr)
yVals = getYVals(testArr, 720)
# print(xVals)
# print(yVals)

def getArc(x_vals, y_vals):
  """Returns array of polynomial coefficients.
  Parameters:
   x_vals (array)
   y_vals (array)
  Returns:
   coef (array) - 2nd order polynomial coefficients [a, b, c] where a + bx + cx^2
  """
  if len(x_vals) > 0 and len(y_vals) > 0:
    return poly.polyfit(x_vals, y_vals, 2).tolist()

arc = getArc(xVals, yVals)
# print(arc)