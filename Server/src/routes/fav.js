const {deleteFav, postFav} = require("../controllers/handleFavorites");
const router = require("express").Router();

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav); 

module.exports = router;