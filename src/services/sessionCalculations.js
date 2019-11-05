



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


export const sessionArcDetermination = function(shots) {
  let arcAvg = 0;
  for (const i in shots) {
    arcAvg += shots[i].arc_max
  }
  arcAvg = arcAvg/shots.length

  if (arcAvg < 560) {
    return "Low"
  }
  else if (arcAvg > 620) {
    return "High"
  }
  else {
    return "Medium"
  }

}

