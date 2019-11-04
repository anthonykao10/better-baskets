const router = require('express').Router();
const {getSessionData, createNewSession, updateSession, deleteSession} = require('../models/sessions');

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.post('/new', (req, res) => {
  createNewSession(req.body.cookie)
  .then((session) => {
    res.json(session.rows[0])
  })
});

router.post('/:session_id/delete', (req, res) => {
  console.log(req.params.session_id, "PARAMS ID")
  deleteSession(req.params.session_id)
  .then((response) => {
    res.status(204).send()
  })

});
router.delete('/:session_id/shots/:id', (req, res) => {});

router.put('/:session_id/end_session', (req, res) => {
  console.log('session end route req.body:', req.body)
  const id = (req.params.session_id);
  updateSession(id)
    .then(() => res.end())
    .catch((err) => console.log(err));
});

router.get('/:user_id/data', (req, res) => {
  getSessionData(req.params.user_id)
  .then((SessionData) => {
    res.json(SessionData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;