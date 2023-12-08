const { Favorite } = require("../DB_connection");
//!----------------------------------------------------+/

const deleteFav = async (req, res) => {
	const id = req.params.id;
	try {
		await Favorite.destroy({ where: { id } });
		const allFav = await Favorite.findAll();
		return res.status(200).json(allFav);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = deleteFav;
