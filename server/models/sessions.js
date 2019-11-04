const pool = require('../db/connection');

const getSessionData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM sessions
  WHERE sessions.user_id = $1
  ORDER BY sessions.id 
  `, [userID])
};

const createNewSession = (id) => {
  return pool.query(`
  INSERT INTO sessions (user_id)
  VALUES ($1)
  RETURNING *
  `, [id])
}

const updateSession = (id) => {
  console.log("update session function", id)
  return pool.query(`
    UPDATE sessions
    SET end_time = CURRENT_TIMESTAMP
    WHERE id = $1
    RETURNING *
    `, [id])
}

const deleteSession = (sessionId) => {
  return pool.query(`
  DELETE FROM sessions
  WHERE id =  $1`, [sessionId])
}

module.exports = {getSessionData, createNewSession, updateSession, deleteSession}
