import { useEffect } from "react";
import axios from "axios";

export default function useDashboardData() {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/users/1/data`)),
    ]).then((all) => {
      console.log(all)
    });
    
  })

}


