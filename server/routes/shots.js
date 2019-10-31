const router = require('express').Router();
const {getShotData} = require('../models/shots');

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.get('/:user_id/data', (req, res) => {
  getShotData(req.params.user_id)
  .then((ShotData) => {
    res.json(ShotData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;