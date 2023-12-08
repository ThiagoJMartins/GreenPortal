const getCharById = require("../controller/getCharById");
const getFav = require("../controller/getFav");
const login = require("../controller/login");
const postFav = require("../controller/postFav");
const deleteFav = require("../controller/deleteFav");
const postUser = require("../controller/postUser");
const { Router } = require("express");
//!----------------------------------------------------+/
const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.get("/fav", getFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
