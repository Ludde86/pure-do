const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

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

	// check for errors
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	// check for unique username in our database
	const userExists = await User.findOne({ username: req.body.username });
	if (userExists) {
		return res.status(400).send('Username already exists');
	}

	// generate a salt (creates a random string for our password)
	const salt = await bcrypt.genSalt();

	// make us of salt to hash our passwords
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		password: hashPassword
	});

	try {
		const savedUser = await user.save(); // wait for the response

		// set what we want to send back to the user (from the savedUser)
		res.send({ id: savedUser._id, username: savedUser.username });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/login', validate, async (req, res) => {
	const errors = validationResult(req);

	// check for errors
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	// check if username exists
	const user = await User.findOne({ username: req.body.username });
	if (!user) {
		return res.status(404).send('User is not registered');
	}

	// check if password is correct
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.status(404).send('Invalid Password');
	}

	// create and assign a token

	res.send(`Welcome ${user.username}!`);
});

module.exports = router;
