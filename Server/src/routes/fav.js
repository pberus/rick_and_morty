const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const router = require("express").Router();

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
