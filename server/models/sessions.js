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

const createNewSession = (id) => {
  newID = Number(id)
  return pool.query(`
  INSERT INTO sessions (user_id)
  VALUES ($1)
  RETURNING *
  `, [id])
}

module.exports = {getSingleSessionData, createNewSession}