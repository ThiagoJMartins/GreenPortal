const { Favorite } = require("../DB_connection");

const getFav = async (req, res) => {
	try {
		const favorites = await Favorite.findAll();

		return res.status(200).json(favorites);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
module.exports = getFav;
