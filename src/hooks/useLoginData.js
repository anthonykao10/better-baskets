import { useEffect } from "react";
import axios from "axios";

export default function useLoginData(username) {
  // console.log("Hit the login")
  // axios.get(`http://localhost:8080/login`)
  // .then((authenticate) => {
  //   console.log(authenticate)
  // })

  // console.log(username, " 0000000000")

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.post(`users/login`)),
    ]).then((response) => {
      console.log(response[0].data, " Response.data on useLoginData.js")
    });
  })

}


// TWO ISSUES 1) Cant pull username and password from react component
// 2) Can't send the data from back end to front end