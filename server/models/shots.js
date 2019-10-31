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

const insertShot = (input) => {
  return pool.query(`
  INSERT INTO shots (session_id, angle, arc_max, coordinates, video_reference)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `, [input.session_id, input.angle, input.arc_max, input.coordinates, input.video_reference])
};

module.exports = {getSingleShotData, insertShot}


// id SERIAL PRIMARY KEY NOT NULL,
// session_id INTEGER REFERENCES sessions(id) ON DELETE CASCADE,
// angle FLOAT(2),
// arc_max JSON,
// coordinates JSON,
// video_reference VARCHAR(255) NOT NULL,
// distance FLOAT(2),
// success BOOLEAN DEFAULT TRUE