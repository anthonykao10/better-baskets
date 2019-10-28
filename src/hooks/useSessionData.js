import { useEffect } from "react";
import axios from "axios";

export default function useSessionData(id) {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/sessions/${id}/data`)),
    ]).then((all) => {
      console.log(all)
    });
    
  })

}