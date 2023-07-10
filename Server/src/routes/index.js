const router = require("express").Router();
const character = require("./character")
const fav = require("./fav")
const login = require("./login")

router.use("/", character)
router.use("/", fav)
router.use("/", login)

module.exports = router;
