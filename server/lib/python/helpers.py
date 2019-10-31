import numpy.polynomial.polynomial as poly
import sympy as sp
import math


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

def f(x, c, b, a):
  """Returns the value of polynomial evaluated 
  at point x, given the coefficients c, b, a.
  Parameters:
    x (int)   - point to evaluate at
    c (float) - leading coefficient
    b (float) - second coefficient
    a (float) - constant
  """
  return (c * (x ** 2)) + (b * x) + a

def getArcMax(c, b, a):
  """Returns max height of a shot.
  Parameters:
    c (float) - leading coefficient
    b (float) - second coefficient
    a (float) - constant
  """
  if c is None or b is None or a is None:
    return None
  x = sp.Symbol('x')
  fprime = sp.diff( f(x, c, b, a) )
  if fprime.diff(x) < 0:
    max_x = sp.solve(fprime, x)
    return round( f(max_x[0], c, b, a), 2 )

# print('getArcMax:', getArcMax( arc[2], arc[1], arc[0] ))

def getArcAngle(c, b, a):
  """Returns angle of a shot.
  Parameters:
    c (float) - leading coefficient
    b (float) - second coefficient
    a (float) - constant
  """
  if c is None or b is None or a is None:
    return None
  x = sp.Symbol('x')
  fprime = sp.diff( f(x, c, b, a) )
  if fprime.diff(x) < 0:
    return round( math.degrees(math.atan(fprime.args[0])), 2 )

print('getArcAngle:', getArcAngle( arc[2], arc[1], arc[0] ))
