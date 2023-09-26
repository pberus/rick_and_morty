const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image, gender } = data;

    if (!name) throw new Error(`Faltan datos del personaje con ID: ${id}`);

    const character = {
      id: +id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };
    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }

  /* axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
    */
  //! Esto ultimo es como estaba antes del async await, si ya me quedo claro eliminalo
};

module.exports = getCharById;
