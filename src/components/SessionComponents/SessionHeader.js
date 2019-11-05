import React from "react";

import { totalPracticeTimeFunction} from '../../services/overallCalculations';
 
export default function SessionHeader({start_time, end_time}) {

const dateString = () => {
  return start_time.slice(0, 10);   
 }

 const sessionDate = dateString();

 const practiceTime = totalPracticeTimeFunction([{
   "start_time": start_time,
   "end_time": end_time
 }])

  return (
    <div>
      <p>Session Date: {sessionDate}</p>
      <p>Length of Practice: {practiceTime} minutes</p>
    </div> 
  );
}