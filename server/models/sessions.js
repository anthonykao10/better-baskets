const pool = require('../db/connection');

const getSessionData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM sessions
  WHERE sessions.user_id = $1 
  `, [userID])
};

const createNewSession = (id) => {
  newID = Number(id)
  return pool.query(`
  INSERT INTO sessions (user_id)
  VALUES ($1)
  RETURNING *
  `, [id])
}

const deleteSession = (sessionId) => {
  return pool.query(`
  DELETE FROM sessions
  WHERE id =  $1`, [sessionId])
}

module.exports = {getSessionData, createNewSession, deleteSession}
