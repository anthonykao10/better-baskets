const router = require('express').Router();
const {getAllUserData} = require('../models/users');

router.get('/login', (req, res) => {});
router.post('/login', (req, res) => {});

router.post('/logout', (req, res) => {});

router.get('/register', (req, res) => {});
router.post('/register', (req, res) => {});

router.post('/:user_id/sessions', (req, res) => {});
router.put('/:user_id/sessions', (req, res) => {});
router.delete('/:user_id/sessions', (req, res) => {});

router.get('/:user_id/data', (req, res) => {
  getAllUserData(req.params.user_id)
  .then((userShotData) => {
    res.json(userShotData.rows);
  })
  .catch(err => console.log(err))
});
router.get('/:user_id', (req, res) => {});

module.exports = router;