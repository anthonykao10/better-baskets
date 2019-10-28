const pool = require('../db/connection');

const getAllUserData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  JOIN sessions 
  ON sessions.id = shots.session_id
  JOIN users
  ON users.id = sessions.user_id
  WHERE users.id = $1 
  `, [userID])
};

module.exports = {getAllUserData}