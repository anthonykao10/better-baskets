import { useEffect } from "react";
import axios from "axios";

export default function useLoginData(username) {

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.post(`users/login`)),
    ]).then((response) => {
      console.log(response[0].data, " Response.data on useLoginData.js")
    });
  })

}
