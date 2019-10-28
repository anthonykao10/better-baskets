import { useEffect } from "react";
import axios from "axios";

export default function useShotData(id) {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/shots/${id}/data`)),
    ]).then((all) => {
      console.log(all)
    });
    
  })

}