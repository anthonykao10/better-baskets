const router = require('express').Router();

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});

router.post('/:session_id/shots/:id', (req, res) => {});
router.put('/:session_id/shots/:id', (req, res) => {});
router.delete('/:session_id/shots/:id', (req, res) => {});

module.exports = router;