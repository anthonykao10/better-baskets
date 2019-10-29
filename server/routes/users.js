
const router = require('express').Router();
const {getAllUserData, getLoginData} = require('../models/users');

router.get('/login', (req, res) => {});
router.post('/login', (req, res) => {
  return getLoginData(req.body.username) // needs to be changed
  .then((userData) => {
    if (typeof userData.rows[0] == "undefined") {
      console.log("USERNAME INVALID!")
      res.status(500)
    }
    
    else if (userData.rows[0].password !== req.body.password) {
      console.log(userData.rows[0].password, "input Password", req.body.password)
      console.log("WRONG PASSWORD")
      res.status(500)
    }
    else {
      res.json({username: userData.rows[0].username, ID: userData.rows[0].id})
    }}
  )} 
  );


router.post('/logout', (req, res) => {});

router.get('/register', (req, res) => {});
router.post('/register', (req, res) => {});

router.post('/:user_id/sessions', (req, res) => {});
router.put('/:user_id/sessions', (req, res) => {});
router.delete('/:user_id/sessions', (req, res) => {});

router.get('/:user_id/data', (req, res) => {
  return getAllUserData(req.params.user_id)
  .then((userShotData) => {
    return userShotData.rows
  })
  .catch(err => console.log(err))
});
router.get('/:user_id', (req, res) => {});

module.exports = router;