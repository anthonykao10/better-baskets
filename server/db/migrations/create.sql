DROP TABLE IF EXISTS shots CASCADE;
DROP TABLE IF EXISTS sessions CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   picture VARCHAR(255)
-- );

-- CREATE TABLE sessions (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   end_time TIMESTAMP
-- );

-- CREATE TABLE shots (
--   id SERIAL PRIMARY KEY NOT NULL,
--   session_id INTEGER REFERENCES sessions(id) ON DELETE CASCADE,
--   angle FLOAT(2),
--   arc_max FLOAT(2),
--   coordinates JSON,
--   video_reference VARCHAR(255) NOT NULL,
--   distance FLOAT(2),
--   success BOOLEAN DEFAULT FALSE
-- );



