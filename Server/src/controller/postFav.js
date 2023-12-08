const Favorite = require("../DB_connection");
//!----------------------------------------------------+/

const postFav = async (req, res) => {
	const { name, origin, status, image, species, gender, location, episode } =
		req.body;

	try {
		if (
			!name ||
			!origin ||
			!status ||
			!image ||
			!species ||
			!gender ||
			!location ||
			!episode
		) {
			return res.status(401).json({ error: "Data is missing" });
		}
		await Favorite.findOrCreate({
			where: {
				name,
				origin,
				status,
				image,
				species,
				gender,
				location,
				episode,
			},
		});
		const allFavs = await Favorite.findAll();
		return res.status(200).json(allFavs);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = postFav;
