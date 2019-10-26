const router = require('express').Router();
const { spawn } = require('child_process');

router.get('/', (req, res) => {
  res.send('homepage');
});

router.get('/dashboard', (req, res) => {
  const track = spawn('python', ['lib/track.py']);
  
  track.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.redirect('/');
  });
});

router.use('/users', require('./users'));
router.use('/sessions', require('./sessions'));
router.use('/shots', require('./shots'));

router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;