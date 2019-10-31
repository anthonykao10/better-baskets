const router = require('express').Router();
const {getSingleSessionData, createNewSession} = require('../models/sessions');

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

router.get('/:session_id/data', (req, res) => {
  getSingleSessionData(req.params.session_id)
  .then((SessionData) => {
    res.json(SessionData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;