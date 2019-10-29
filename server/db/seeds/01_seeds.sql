INSERT INTO users (username, email, password, picture)
  VALUES ('NBA Andrew', 'NBA_ANDREW@gmail.com', 'password', 'https://cdn5.vectorstock.com/i/1000x1000/19/59/basketball-ball-clean-design-logo-mark-brand-vector-21301959.jpg'),
  ('WNBA Suzanna', 'suzanna@gmail.com', 'password', 'https://cdn5.vectorstock.com/i/1000x1000/19/59/basketball-ball-clean-design-logo-mark-brand-vector-21301959.jpg'),
  ('Community Court Cathy', 'cathy@gmail.com', 'password', 'https://cdn5.vectorstock.com/i/1000x1000/19/59/basketball-ball-clean-design-logo-mark-brand-vector-21301959.jpg');

INSERT INTO sessions (user_id, start_time, end_time, date)
  VALUES (1, '10:34:15', '11:34:15', '2019-10-24'),
  (1, '10:34:15', '11:34:15', '2019-10-25'),
  (2, '10:34:15', '11:34:15', '2019-10-26'),
  (1, '10:34:15', '11:34:15', '2019-10-26'),
  (3, '10:34:15', '11:34:15', '2019-10-26');

INSERT INTO shots (session_id, angle, arc_max, coordinates, video_reference, distance, success)
  VALUES (1, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, true),
  (1, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, false),
  (2, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, true),
  (2, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, true),
  (3, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, false),
  (3, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, true),
  (4, 45, '[1069, 361]', '[[79, 381], [106, 350], [141, 326], [181, 290], [236, 316], [274, 307], [321, 314], [367, 318], [411, 324], [465, 318], [515, 300], [570, 285], [628, 274], [682, 250], [741, 245], [794, 233], [848, 236], [895, 251], [947, 255], [1000, 252], [1033, 316], [1069, 361]]', 'testing_123.webm', 50, true);
