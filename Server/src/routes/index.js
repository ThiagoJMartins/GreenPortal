const getCharById = require("../controller/getCharById");
const login = require("../controller/login");
const postFav = require("../controller/postFav");
const deleteFav = require("../controller/deleteFav");
const postUser = require("../controller/postUser");
const { Router } = require("express");
//!----------------------------------------------------+/
const router = Router();

router.get("/character/:id", (req, res) => getCharById(req, res));
router.get("/login", (req, res) => login(req, res));
router.post("/login", (req, res) => postUser(req, res));
router.post("/fav", (req, res) => postFav(req, res));
router.delete("/fav/:id", (req, res) => deleteFav(req, res));

module.exports = router;
