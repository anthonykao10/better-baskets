const pool = require('../db/connection');

const getShotData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  WHERE shots.session_id = ANY (SELECT id FROM sessions WHERE sessions.user_id = $1)
  ORDER BY shots.id 
  `, [userID])
};

const insertShot = (input) => {
  return pool.query(`
  INSERT INTO shots (session_id, angle, arc_max, coordinates, video_reference, success)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `, [Number(input.session_id), input.angle, input.arc_max, input.coordinates, input.reference, input.success]);
};

const updateShotSuccess = (success, shotId) => {
  return pool.query(`
    UPDATE shots
    SET success = $1
    WHERE id = $2
    RETURNING *;
  `, [success, shotId])
    .then(res => {
      if (!res.rows.length) return undefined;
      return res.rows[0];
    })
    .catch(err => console.log('ERR updateShot:', err));
};

const deleteShot = (shotId) => {
  return pool.query(`
    DELETE FROM shots
    WHERE id = $1
    RETURNING *;
  `, [shotId])
    .then(res => {
      if (!res.rows.length) return null;
      return res.rows[0];
    })
    .catch(err => console.log('ERR deleteShot:', err));
}

module.exports = {
  getShotData, 
  insertShot,
  updateShotSuccess,
  deleteShot
};
