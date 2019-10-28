const pool = require('../db/connection');

const getSingleShotData = (shotID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  JOIN sessions 
  ON sessions.id = shots.session_id
  WHERE shots.id = $1 
  `, [shotID])
};

module.exports = {getSingleShotData}