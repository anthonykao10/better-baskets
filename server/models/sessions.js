const pool = require('../db/connection');

const getSingleSessionData = (sessionID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  JOIN sessions 
  ON sessions.id = shots.session_id
  WHERE sessions.id = $1 
  `, [sessionID])
};

module.exports = {getSingleSessionData}