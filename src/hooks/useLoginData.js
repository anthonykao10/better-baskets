import { useEffect } from "react";
import axios from "axios";

export default function useLoginData() {
  // console.log("Hit the login")
  // axios.get(`http://localhost:8080/login`)
  // .then((authenticate) => {
  //   console.log(authenticate)
  // })

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.post(`users/login`)),
    ]).then((all) => {
      console.log(all, "~~~~~~~~~")
    });
    
  })

}


