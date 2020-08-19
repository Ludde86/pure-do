const express = require('express');
const { body, validationResult } = require('express-validator');
const Todo = require('../models/Todo');
const router = express.Router();

// PATH: /api/todos
router.post(
	'/',
	[ body('description').isLength({ min: 3, max: 50 }).withMessage('Min 3 characters - Max 50 characters') ],
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).send({ errors: errors.array() });
		}
		// we need a way to pass the request object into our database
		// -> so that we can extract the data from it (request object)
		// -> to do that, we are going to make use of a middleware (app.use(express.json()))
		const todo = new Todo({
			description: req.body.description,
			amount: req.body.amount
		});

		todo
			.save()
			.then((result) => {
				res.send({
					message: 'Todo successfully created',
					data: result
				});
			})
			.catch((err) => console.log(err));
	}
);

module.exports = router;
