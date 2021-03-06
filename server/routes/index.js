const router = require('express').Router();
require('dotenv').config();

router.get('/S3creds', (req, res) => {
 
  if(req.cookies.userID) {
    res.json({
        accessKeyId: process.env.AWS_KEY_ID,
        secretAccessKey: process.env.AWS_KEY_SECRET
      });
  } else {
    res.status(403).json("You are not logged in enough to access this endpoint");
  }
});

router.use('/users', require('./users'));
router.use('/sessions', require('./sessions'));
router.use('/shots', require('./shots'));

router.get('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;