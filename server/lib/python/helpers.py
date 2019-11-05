import numpy as np
import numpy.polynomial.polynomial as poly
import sympy as sp
import math

def getXVals(coords):
  return map( lambda coord: coord[0], coords )

def getYVals(coords, res_height):
  return map( lambda coord: res_height - coord[1], coords )

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

def checkSuccess(x1, x2, y1, y2, y_res, arc):
  """Returns true if arc passes through box.
  Parameters:
    x1, x2 (int) - x coordinate of box
    y1, y2 (int) - y coordinate of box
    y_res  (int) - frame height
    arc    (arr) - 2nd order polynomial coefficients
  """
  # calibrate y values with frame resolution
  y1 = y_res - y1
  y2 = y_res - y2
  for i in range(x1, x2 + 1):
    arc_y = int(f(i, arc[2], arc[1], arc[0]))
    if arc_y in range(y2, y1 + 1):
      return True
  
def formatCoordinates(arc, start, end):
  if (end < start):
    temp = end
    end = start
    start = temp
  coords = []
  for i in range(start, end, 1):
    coords.append( [i, f(i, arc[2], arc[1], arc[0])] )
  return coords