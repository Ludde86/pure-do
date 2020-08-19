const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// PATH: /api/todos
router.post('/', (req, res) => {
	// terminate this function if there is no todo
	if (!req.body.description) {
		return res.status(400).send({ error: 'Description is required' }); // bad request
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
});

module.exports = router;
