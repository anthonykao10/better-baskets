const router = require('express').Router();
const {getSingleSessionData} = require('../models/sessions');

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.post('/:session_id/shots/:id', (req, res) => {});
router.put('/:session_id/shots/:id', (req, res) => {});
router.delete('/:session_id/shots/:id', (req, res) => {});

router.get('/:session_id/data', (req, res) => {
  return getSingleSessionData(req.params.session_id)
  .then((SessionData) => {
    return SessionData.rows;
  })
  .catch(err => console.log(err))
});

module.exports = router;