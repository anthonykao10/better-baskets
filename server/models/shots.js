const pool = require('../db/connection');

const getShotData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  WHERE shots.session_id = ANY (SELECT id FROM sessions WHERE sessions.user_id = $1) 
  `, [userID])
};

module.exports = {getShotData}

