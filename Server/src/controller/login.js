const { User } = require("../DB_connection");
//!----------------------------------------------------+/

const login = async (req, res) => {
	const { email, password } = req.query;

	try {
		if (!email || !password) {
			return res.status(400).json({ error: "Data is missing" });
		}
		const userDB = await User.findOne({ where: { email } });
		if (!userDB) return res.status(404).json({ error: "User not finded" });
		if (password === userDB.password)
			return res.status(200).json({ access: true });
		else return res.status(403).json({ error: "Incorrect password" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = login;
