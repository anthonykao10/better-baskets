



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


export const totalPracticeTimeFunction = function(sessions) {
  let time = 0;
  for (const i in sessions) {
    if (sessions[i].start_time && sessions[i].end_time) {
      let start_time = sessions[i].start_time.split(":")
      let end_time = sessions[i].end_time.split(":")
      start_time = (start_time[0].slice(-2) * 60) + Number(start_time[1])
      end_time = (end_time[0].slice(-2) * 60) + Number(end_time[1])
  
      time += end_time - start_time
  
    }

  }
  return time;
}
