import { useEffect } from "react";
import axios from "axios";

export default function useLoginData() {

  axios.post(`/login`)
  .then((authenticate) => {
    console.log(authenticate)
  })

  // useEffect(() => {
  //   Promise.all([
  //     Promise.resolve(axios.post(`/users/1/data`)),
  //   ]).then((all) => {
  //     console.log(all)
  //   });
    
  // })

}


