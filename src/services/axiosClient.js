import axios from 'axios';
import cookies from 'js-cookie';
let axiosClient;

export const getClient = () => {
  if (!axiosClient) {
    // get token/cookie
    const userID = cookies.get('userID');

    axiosClient = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 5000,
      headers: {
        authorization: userID
      }
    });
  }

  return axiosClient;
}

export const refreshClient = () => {
  axiosClient = undefined;
  axiosClient = getClient();
}
