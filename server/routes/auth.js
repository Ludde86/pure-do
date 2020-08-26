const express = require('express');
const { body, validationResult } = require('express-validator');

// import the model
const User = require('../models/User');

// init the express app
const router = express.Router();

const validate = [
	body('username').isLength({ min: 3 }).withMessage('Username must be at least three characters'),
	body('password').isLength({ min: 3 }).withMessage('Password must be at least three characters')
];

// (req, res) -> handle this request
router.post('/register', validate, async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const user = new User({
		username: req.body.username,
		password: req.body.password
	});

	try {
		const savedUser = await user.save(); // wait for the response
		res.send(savedUser);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/login', (req, res) => {
	res.send('login route');
});

module.exports = router;
