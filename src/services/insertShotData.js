import cookies from 'js-cookie'
import axios from "axios";

const insertShotData = function(referenceString) {
  axios.post(`shots/new`, {
    session_id: cookies.get("sessionID"),
    reference: referenceString
  })
  .then((response) => {
    return response
  })
  .catch((err) => {
    throw err
  })
}
 

export default insertShotData


// CREATE TABLE shots (
//   id SERIAL PRIMARY KEY NOT NULL,
//   session_id INTEGER REFERENCES sessions(id) ON DELETE CASCADE,
//   angle FLOAT(2),
//   arc_max JSON,
//   coordinates JSON,
//   video_reference VARCHAR(255) NOT NULL,
//   distance FLOAT(2),
//   success BOOLEAN DEFAULT TRUE
// );



// const submit = function(username, password) {
//   getClient().post(`users/login`, {
//       username: username,
//       password: password
//     },)
//     .then((response) => {
//       cookies.set('userID', response.data.ID)
//       refreshClient()
//       props.onLogin()
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// }

// const submit = function() {
//   axios.post('sessions/new', {
//     cookie: cookies.get('userID')
//   })
//   .then((response) => {
//     console.log(response.data)
//     cookies.set('sessionID', response.data.id)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
