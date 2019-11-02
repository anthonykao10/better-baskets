const fileUpload = require('../util/fileUpload')
const path = require('path');
const router = require('express').Router();
const { spawn } = require('child_process');

router.get('/', (req, res) => {
  res.send('homepage');
});

router.use('/users', require('./users'));
router.use('/sessions', require('./sessions'));
router.use('/shots', require('./shots'));

router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;