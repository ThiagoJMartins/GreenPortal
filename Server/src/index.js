const http = require("http");
const characters = require("./utils/data");
//!----------------------------------------------------+/
http
	.createServer((req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");

		const { url } = req;

		if (url.includes("/rickandmorty/character")) {
			const id = Number(url.split("/").at(-1));

			const character = characters.find((char) => {
				return char.id === id;
			});

			res.writeHead(200, { "Content-Type": "application/json" });
			return res.end(JSON.stringify(character));
		}
	})
	.listen(3001, "localhost");
