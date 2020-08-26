const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		typr: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);
