import { useEffect } from "react";
import axios from "axios";

export default function useDashboardData(id) {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/users/${id}/data`)), //single user
      Promise.resolve(axios.get(`/sessions/${id}/data`)), //all sessions for that user
      Promise.resolve(axios.get(`/shots/${id}/data`)) //all shots for that user
    ]).then((all) => {
      console.log(all[0].data[0])
      console.log(all[1].data)
      console.log(all[2].data)
    });   
  })
}