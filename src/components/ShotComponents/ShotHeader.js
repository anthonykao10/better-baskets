import React from "react";
 
export default function ShotHeader({ angle, shotAngleAverage }) {

  return (
    <div>
      <p>*****</p>
      <p>Shot Header</p>
      <p>Shot Angle: {angle}</p>
      <p>Overall Angle Average: {shotAngleAverage}</p>
      <p>*****</p>
    </div> 
  );
}