const server = require("./App");
const { conn } = require("./DB_connection");
const PORT = 3001;
//!----------------------------------------------------+/

conn.sync({ alter: true }).then(
	console.log("DB Connected"),
	server.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`);
	})
);
