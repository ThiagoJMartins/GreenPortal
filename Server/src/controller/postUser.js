const { User } = require("../DB_connection");
//!----------------------------------------------------+/

const postUser = async (req, res) => {
	const { email, password } = req.body;
	const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/;
	const regexPassword = /[0-9]/;

	try {
		if (email === "" || password === "") {
			return res.status(400).json({ message: "Data is missing" });
		}
		if (!regexEmail.test(email)) {
			return res.status(400).json({ message: "Invalid mail" });
		}
		if (!regexPassword.test(password)) {
			return res.status(400).json({ message: "Password needs a number" });
		}
		const [user, isCreated] = await User.findOrCreate({
			where: { email },
			defaults: { password },
		});
		if (isCreated) return res.status(201).json(user);
		else return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = postUser;
