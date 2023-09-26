const character = require("./character")
const fav = require("./fav")
const login = require("./login")

const router = require("express").Router();

router.use("/", character)
router.use("/", fav)
router.use("/", login)

module.exports = router;
