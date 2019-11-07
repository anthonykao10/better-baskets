
const path = require('path')
const router = require('express').Router();
const fileUpload = require('../util/fileUpload');
const { spawn } = require('child_process');
const {getShotData, insertShot, updateShotSuccess, deleteShot} = require('../models/shots');


router.post('/new', (req, res) => {
  require('../util/fileDownload')(req.body.reference)
    .then((x) => {
      const child = spawn('python', [path.resolve(__dirname, '../lib/python/track.py'), '-v', path.resolve(__dirname, '../videos/downloads/unprocessedVideo.webm')]);


      let scriptData = '';
      child.stdout.on('data', (data) => {
        scriptData += data;
      });

      child.stdout.on('end', () => {
        let pythonData = JSON.parse(scriptData);
        console.log('PYTHON DATA:', pythonData);

        const insertShotData = {
          session_id: req.body.session_id,
          angle: pythonData.angle,
          arc_max: pythonData.arcMax,
          coordinates: JSON.stringify(pythonData.coordinates),
          reference: req.body.reference,
          success: pythonData.success
        }
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
  console.log('shots route req.body:', req.body)
  let shotData = req.body.success;
  let shotID = req.params.id;

  updateShotSuccess(shotData, shotID)
    .then(() => res.end())
    .catch((err) => console.log(err));
});

router.post('/:id/delete', (req, res) => {
  console.log(req.params.id)
  deleteShot(req.params.id)
  .then((response) => {
    res.json(response.session_id);
  })
});

router.get('/:user_id/data', (req, res) => {
  getShotData(req.params.user_id)
  .then((ShotData) => {
    res.json(ShotData.rows);
  })
  .catch(err => console.log(err))
});

module.exports = router;