import React from "react";

import { totalPracticeTimeFunction} from '../../services/overallCalculations';
 
export default function SessionHeader({start_time = '', end_time, id}) {

const dateString = (time) => {
  return time.slice(0, 10)
 }

 const sessionDate = dateString(start_time);

 const practiceTime = totalPracticeTimeFunction([{
   "start_time": start_time,
   "end_time": end_time
 }])

  return (
    <div>
      <h2>Session #{ id }</h2>
      <p>Session Date: {sessionDate}</p>
      <p>Length of Practice: {practiceTime} minutes</p>
    </div> 
  );
}