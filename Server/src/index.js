const characters = require("./utils/data");
const http = require("http");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];

    if (param1 === "rickandmorty" && param2 === "character") {
      const character = characters.find((character) => {
        return character.id === Number(id);
      });
      if (character) {
        return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
      } else {
        res
          .writeHead(404, { "Content-Type": "text/plain" })
          .end("Character not found");
      }
    }

    return res
      .writeHead(404, { "Content-Type": "text/plain" })
      .end("Not found");
  })
  .listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
