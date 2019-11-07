import { shotArcDetermination } from './shotCalculations';

export const userFieldGoalCalculation = function(shots) {
  let count = 0;
  for (const i in shots) {
    if (shots[i].success) {
      count ++
    }
  }

    return count;
}

export const userAngleAverage = function(shots) {
  // Successful shots only
  let result = 0;
  let count = 0;
  for (const i in shots) {
    if (shots[i].success === true) {
      result += shots[i].angle
      count ++
    }
    
  }
  result = result/count

  return result;
}

export const userArcDetermination = function(shots) {
  // Successful shots only
  let arcAvg = 0;
  let count = 0;
  for (const i in shots) {
    if (shots[i].success) {
      arcAvg += shots[i].arc_max
      count ++
    }
  }
  arcAvg = arcAvg/count;

  return shotArcDetermination(arcAvg);
}

export const totalPracticeTimeFunction = function(sessions) {
  let time = 0;
  for (const i in sessions) {
    if (sessions[i].start_time && sessions[i].end_time) {
      let start_time = sessions[i].start_time.split(":");
      let end_time = sessions[i].end_time.split(":");
      start_time = (start_time[0].slice(-2) * 60) + Number(start_time[1]);
      end_time = (end_time[0].slice(-2) * 60) + Number(end_time[1]);
  
      time += end_time - start_time;
    }
  }
  return time;
}
