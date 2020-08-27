const express = require('express');
const { body, validationResult } = require('express-validator');

const verifyToken = require('./verifyToken');

const Todo = require('../models/Todo');

const router = express.Router();

const validate = [
	body('description')
		.isLength({ min: 3, max: 50 })
		.withMessage('Please enter minumum 3 characters, and maximum 50 characters')
];

// PATH: /api/todos
router.post('/', validate, (req, res) => {
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
});

// PATH: /api/todos
router.get('/', (req, res) => {
	Todo.find()
		.then((todos) => {
			res.send(todos);
		})
		.catch((err) => console.log(err));
});

// PATH: /api/todos/id
router.get('/:id', (req, res) => {
	const todoId = req.params.id;
	Todo.findById(todoId)
		.then((todo) => {
			res.send(todo);
		})
		.catch((err) => console.log(err));
});

// PATH: /api/todos/id
router.put('/:id', validate, (req, res) => {
	const todoId = req.params.id;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).send({ errors: errors.array() });
	}

	Todo.findById(todoId)
		.then((todo) => {
			todo.description = req.body.description;
			return todo.save();
		})
		.then((result) => {
			res.send({
				message: 'Todo successfully updated',
				data: result
			});
		})
		.catch((err) => console.log(err));
});

// PATH: /api/todos/id
router.delete('/:id', (req, res) => {
	const todoId = req.params.id;
	Todo.findByIdAndRemove(todoId)
		.then((result) => {
			res.send({
				message: 'Todo successfully removed',
				data: result
			});
		})
		.catch((err) => console.log(err));
});

module.exports = router;
