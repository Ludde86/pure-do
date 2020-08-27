const jwt = require('jsonwebtoken');

// this function (middleware) is used in any route we want to protect
// this works -> when we get a request and a response, after checking the validity of the token
// -> we make use of the next to call the subsequent (next) function
module.exports = function(req, res, next) {
	// grab the token from the header of the request
	const token = req.header('auth-token');
	if (!token) {
		return res.status(401).send('Access denied');
	}

	// verify the token
	try {
		const verified = jwt.verify(token, process.env.SECRET);

		// once the token is verified, we can attach it to the body of the request
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send('Invalid token');
	}
};
