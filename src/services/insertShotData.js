import cookies from 'js-cookie';
import axios from "axios";

const insertShotData = function(referenceString) {
  return axios.post(`shots/new`, {
    session_id: cookies.get("sessionID"),
    reference: referenceString
  });
}
 
export default insertShotData;

