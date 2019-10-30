
const fileUpload = require('../util/fileUpload')
const router = require('express').Router();
const { spawn } = require('child_process');
// const sadfad = require('../videos/newTestANTHONY.webm')

router.get('/', (req, res) => {
  res.send('homepage');
});

router.get('/data', (req, res) => {

  require('../util/fileDownload')()
    .then((x) => {
      const child = spawn('python', ['lib/track.py', '-v', 'videos/newTestANTHONY.webm']);

      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.send(JSON.parse(data));
      });
    
      child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        fileUpload();
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