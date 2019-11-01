
const path = require('path')
const router = require('express').Router();
const fileUpload = require('../util/fileUpload')
const { spawn } = require('child_process');
const {getShotData, insertShot, updateShotSuccess} = require('../models/shots');


router.post('/new', (req, res) => {
  require('../util/fileDownload')(req.body.reference)
    .then((x) => {
      const child = spawn('python', [path.resolve(__dirname, '../lib/python/track.py'), '-v', path.resolve(__dirname, '../videos/downloads/unprocessedVideo.webm')]);


      child.stdout.on('data', (data) => {
        let pythonData = JSON.parse(data)

 
        const insertShotData = {
          session_id: req.body.session_id,
          angle: pythonData.angle,
          arc_max: pythonData.arcMax,
          coordinates: JSON.stringify(pythonData.coordinates),
          reference: req.body.reference
        }
        console.log(insertShotData, "DFASFDASFAD")
        insertShot(insertShotData)
        .then((response) => {
        })
        .catch((err) => {
          console.log(err)
        })

      });
    
      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        fileUpload(req.body.reference);
        res.status(204).send()
      });

    })
    .catch(err => console.log(err));

});

router.put('/:id/success', (req, res) => {
  shotData = req.body.success;
  shotID = req.params.id;

  updateShotSuccess(shotData, shotID)
    .then((response) => res.end())
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {});

router.get('/:user_id/data', (req, res) => {
  getShotData(req.params.user_id)
  .then((ShotData) => {
    res.json(ShotData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;