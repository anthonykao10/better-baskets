import React from "react";
import {
  useParams
} from 'react-router-dom'
import Shot from './ShotComponents/Shot';
import SessionHeader from './SessionComponents/SessionHeader';
import SessionDeleteButton from './SessionComponents/sessionDeleteButton'
import ShotChart from "./ShotComponents/ShotChart";

export default function SessionScreen({shotData, sessionData, refreshShotData, refreshSessionData}) {
  let { id } = useParams();
  console.log('[sesh screen]: shotData:', shotData);
  console.log('[sesh screen]: sessionData:', shotData);


  //find shots by the session and iterate
  const shotsBySession = shotData.filter((item) => item.session_id === parseInt(id));

  const shots = shotsBySession.map(
    shot => {
      return (
        <Shot
        key={shot.id}
        shotID={shot.id} 
        shotAngle={shot.angle}
        />
      );
    }
  )

  console.log('[sesh screen]: shotsBySession:', shotsBySession);


  const generateAllShotCoordinates = (shotsArr) => {

    console.log('shotsArr:', shotsArr);
    if( shotsArr && shotsArr[0] && shotsArr[0].coordinates) {
      
      let output = [];
      for(let [shotIndex, shot] of shotsArr.entries()) {
        console.log('sdfs', shot)
        for(let [index, coords] of shot.coordinates.entries()) {
          if(!output[index]){
            output[index] = [];
          }
          output[index][shotIndex]= coords[1];
        }
      }
      return output;
      
    }
    return [];
  
  };

  console.log('generateAllShotCoords:', generateAllShotCoordinates(shotsBySession));

  const coords = generateAllShotCoordinates(shotsBySession);


  //find information for the single session
  const singleSession = sessionData.find((item) => item.id === parseInt(id));


  return (
    <div>
      <p>Session Screen: { id }</p>
      <SessionHeader {...singleSession} coords={coords}/>
      <SessionDeleteButton sessionId={id} refreshShotData={refreshShotData} refreshSessionData={refreshSessionData}></SessionDeleteButton>
      {shots}
    </div> 
  );

}