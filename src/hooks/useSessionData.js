import { useEffect } from "react";
import axios from "axios";

export default function useSessionData() {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/sessions/1/data`)),
    ]).then((all) => {
      console.log(all)
    });
    
  })

}