



export const sessionFieldGoalCalculation = function(shots) {
  console.log("SessionCalculation: ", shots)
  let count = 0;
  for (const i in shots) {
    if (shots[i].success) {
      count ++
    }
    }

    return count
}

export const sessionAngleAverage = function(shots) {
  let result = 0;
  for (const i in shots) {
    result += shots[i].angle
  }
  result = result/shots.length

  return result
}


