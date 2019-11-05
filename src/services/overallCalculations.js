



export const userFieldGoalCalculation = function(shots) {
  console.log("OverallCalculation: ", shots)
  let count = 0;
  for (const i in shots) {
    if (shots[i].success) {
      count ++
    }
    }

    return count
}

export const userAngleAverage = function(shots) {
  let result = 0;
  for (const i in shots) {
    result += shots[i].angle
  }
  result = result/shots.length

  return result
}

export const userArcDetermination = function(shots) {
  let arcAvg = 0;
  for (const i in shots) {
    arcAvg += shots[i].arc_max
  }
  arcAvg = arcAvg/shots.length

  console.log(arcAvg)

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

