const router = require('express').Router();
const {getAllUserData, getLoginData} = require('../models/users');

router.get('/login', (req, res) => {});
router.post('/login', (req, res) => {
  return getLoginData("NBA Andrew") // needs to be changed
  .then((userData) => {
    console.log(userData.rows[0])
    return userData.rows[0]
  })

});

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