const axios = require("axios");
const API_KEY = "pi-thiagojmartins";
//!----------------------------------------------------+/
const URL = "https://rym2.up.railway.app/api/character/";
//!----------------------------------------------------+/

const getCharById = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const { data } = await axios(URL + `${id}?key=${API_KEY}`);
    const { name, gender, species, origin, image, status, location, episode } =
      data;
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
      location,
      episode,
    };

    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
