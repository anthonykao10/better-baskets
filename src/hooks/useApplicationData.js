import { useEffect, useState } from "react";
import axios from "axios";

export default function useDashboardData(id) {

  const [userData, setUser] = useState({});
  const [sessionData, setSession] = useState([]);
  const [shotData, setShot] = useState([]);
  const [shotUploadComplete, setShotUploadComplete] = useState(false);

  const currentUser = userData.username;

  const updateSuccess = (newShots) => {
    setShot(newShots);
  };
 
  const addSession = (newSessions) => {
    setSession(newSessions);
  };

  const addShot = (newShots) => {
    setShot(newShots);
  };
  
  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/users/${id}/data`)), //single user
      Promise.resolve(axios.get(`/sessions/${id}/data`)), //all sessions for that user
      Promise.resolve(axios.get(`/shots/${id}/data`)) //all shots for that user
    ]).then((all) => {
      const {id, username, picture} = all[0].data[0];
      setUser({id, username, picture});
      setSession(all[1].data);
      setShot(all[2].data);
    });   
  }, [id])

  return({currentUser, userData, sessionData, shotData, addShot, addSession, shotUploadComplete, setShotUploadComplete, updateSuccess})
}