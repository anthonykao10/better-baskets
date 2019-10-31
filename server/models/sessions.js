const pool = require('../db/connection');

const getSessionData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM sessions
  WHERE sessions.user_id = $1 
  `, [userID])
};

module.exports = {getSessionData}