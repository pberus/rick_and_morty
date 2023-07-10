const { login } = require("../controllers/login");
const router = require("express").Router();

router.get("/login", login);

module.exports = router;