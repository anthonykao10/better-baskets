def getXVals(coords):
  return map(lambda coord: coord[0], coords)

def getYVals(coords, res_height):
  return map( lambda coord: res_height - coord[1], coords )

testArr = [ [79,381],[106,350],[141,326],[181,290],[236,316],[274,307],[321,314],[367,318],[411,324],[465,318],[515,300],[570,285],[628,274],[682,250],[741,245],[794,233],[848,236],[895,251],[947,255],[1000,252],[1033,316],[1069,361] ]

# print(getXVals(testArr))
# print(getYVals(testArr, 720))