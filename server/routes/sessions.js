const router = require('express').Router();
const {getSessionData, createNewSession} = require('../models/sessions');

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.post('/new', (req, res) => {
  createNewSession(req.body.cookie)
  .then((session) => {
    res.json(session.rows[0])
  })
});

router.post('/:session_id/shots/:id', (req, res) => {});
router.put('/:session_id/shots/:id', (req, res) => {});
router.delete('/:session_id/shots/:id', (req, res) => {});

router.get('/:user_id/data', (req, res) => {
  getSessionData(req.params.user_id)
  .then((SessionData) => {
    res.json(SessionData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;