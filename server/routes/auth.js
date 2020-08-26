const express = require('express');

// import the model
const User = require('../models/User');

// init the express app
const router = express.Router();

// (req, res) -> handle this request
router.post('/register', async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password
	});

	try {
		const savedUser = await user.save(); // wait for the response
		// console.log(savedUser);
		res.send(savedUser);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/login', (req, res) => {
	res.send('login route');
});

module.exports = router;
