const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	description: { type: String, required: true },
	amount: Number,
	isChecked: { type: Boolean, default: false },
	date: { type: Date, default: Date.now }
});

// create and export our model
module.exports = mongoose.model('Todo', TodoSchema);
