const { User } = require("../DB_connection");
//!----------------------------------------------------+/

const postUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		if (email === "" || password === "") {
			return res.status(400).json({ error: "Data is missing" });
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
