const router = require('express').Router();
const {getUserData, getLoginData} = require('../models/users');

router.post('/login', (req, res) => {
  return getLoginData(req.body.username)
  .then((userData) => {
    // checks username
    if (typeof userData.rows[0] == "undefined") {
      console.log("USERNAME INVALID!");
      res.status(500);
    }
    // checks password
    else if (userData.rows[0].password !== req.body.password) {
      console.log(userData.rows[0].password, "input Password", req.body.password);
      console.log("WRONG PASSWORD");
      res.status(500);
    }
    else {
      res.json({username: userData.rows[0].username, ID: userData.rows[0].id});
    }}
  )}
);

router.get('/:user_id/data', (req, res) => {
  getUserData(req.params.user_id)
  .then((userShotData) => {
    res.json(userShotData.rows);
  })
  .catch(err => console.log(err));
});

module.exports = router;