const express = require('express');

// init the express app
const router = express.Router();

// (req, res) -> handle this request
router.post('/register', (req, res) => {
	res.send('register route');
});

router.post('/login', (req, res) => {
	res.send('login route');
});

module.exports = router;
