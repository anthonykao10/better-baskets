const router = require('express').Router();

router.get('/login', (req, res) => {});
router.post('/login', (req, res) => {});

router.post('/logout', (req, res) => {});

router.get('/register', (req, res) => {});
router.post('/register', (req, res) => {});

router.post('/:user_id/sessions', (req, res) => {});
router.put('/:user_id/sessions', (req, res) => {});
router.delete('/:user_id/sessions', (req, res) => {});

module.exports = router;