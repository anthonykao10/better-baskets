DROP TABLE IF EXISTS shots CASCADE;
DROP TABLE IF EXISTS sessions CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255),
  avg_angle FLOAT(2) DEFAULT NULL,
  avg_arc_max JSON DEFAULT NULL,
  avg_arc JSON DEFAULT NULL,
  avg_sucess FLOAT(2) DEFAULT NUll
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  start_time TIME,
  end_time TIME,
  date DATE -- DATE: Stores date in the format YYYY-MM-DD,
  avg_angle FLOAT(2) DEFAULT NULL,
  avg_arc_max JSON DEFAULT NULL,
  avg_arc JSON DEFAULT NULL,
  avg_sucess FLOAT(2) DEFAULT NUll
);

CREATE TABLE shots (
  id SERIAL PRIMARY KEY NOT NULL,
  session_id INTEGER REFERENCES sessions(id) ON DELETE CASCADE,
  angle FLOAT(2),
  arc_max JSON,
  coordinates JSON,
  video_reference VARCHAR(255) NOT NULL,
  distance FLOAT(2),
  success BOOLEAN DEFAULT TRUE
);



