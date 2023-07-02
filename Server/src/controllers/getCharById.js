const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (res, id) => {
  axios
    .get(URL + id)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" }).end(reason.message);
    });
};

module.exports = getCharById;
