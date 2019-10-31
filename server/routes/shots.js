const router = require('express').Router();
const {getSingleShotData} = require('../models/shots');

router.post('/new', (req, res) => {
  console.log(req.body);
});
router.get('/:id', (req, res) => {});


router.get('/:shot_id/data', (req, res) => {
  getSingleShotData(req.params.shot_id)
  .then((ShotData) => {
    res.json(ShotData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;