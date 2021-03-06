module.exports = function devMode(req, res, next) {
	req.session.currentUser = {
		_id: "5ec3aaa1ddb5ba13c2c72fe0",
		privileges: "admin",
		firstName: "Audrey",
		lastName: "Belson",
		pseudo: "aubelson",
		email: "audrey@pepperoni.com",
		type: "devMode",
	};
	req.session.cookie.maxAge = 1000 * 60 * 60 * 24; // 24 h
	next();
};
