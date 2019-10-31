const router = require('express').Router();
const {getSingleShotData} = require('../models/shots');
const fileUpload = require('../util/fileUpload')
const { spawn } = require('child_process');


router.post('/new', (req, res) => {

  require('../util/fileDownload')()
    .then((x) => {
      const child = spawn('python', ['lib/track.py', '-v', 'videos/newTestANTHONY.webm']);

      child.stdout.on('data', (data) => {
        // console.log(`stdout: ${data}`, req.body);
        // res.send(JSON.parse(data));
        console.log(JSON.parse(data))
      });
    
      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        fileUpload();
      });

    })
    .catch(err => console.log(err));

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