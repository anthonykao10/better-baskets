const path = require('path');
const router = require('express').Router();
const { spawn } = require('child_process');

router.get('/', (req, res) => {
  res.send('homepage');
});

router.get('/data', (req, res) => {

  require('../util/fileDownload')()
    .then(() => {
      const child = spawn('python', [path.resolve(__dirname, '../lib/python/track.py'), '-v', path.resolve(__dirname, '../videos/downloads/newTestANTHONY.webm')]);

      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(JSON.parse(data));
      });
    
      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });

    })
    .catch(err => console.log(err));

});

router.use('/users', require('./users'));
router.use('/sessions', require('./sessions'));
router.use('/shots', require('./shots'));

router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;