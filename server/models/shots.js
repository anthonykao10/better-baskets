const pool = require('../db/connection');

const getShotData = (userID) => {
  return pool.query(`
  SELECT * 
  FROM shots
  WHERE shots.session_id = ANY (SELECT id FROM sessions WHERE sessions.user_id = $1) 
  `, [userID])
};

const insertShot = (input) => {
  // console.log(input)
  return pool.query(`
  INSERT INTO shots (session_id, angle, arc_max, coordinates, video_reference)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `, [Number(input.session_id), input.angle, input.arc_max, input.coordinates, input.reference])
};

const updateShot = (success, shotId) => {
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

module.exports = {
  getShotData, 
  insertShot,
  updateShot
}


// id SERIAL PRIMARY KEY NOT NULL,
// session_id INTEGER REFERENCES sessions(id) ON DELETE CASCADE,
// angle FLOAT(2),
// arc_max JSON,
// coordinates JSON,
// video_reference VARCHAR(255) NOT NULL,
// distance FLOAT(2),
// success BOOLEAN DEFAULT TRUE
