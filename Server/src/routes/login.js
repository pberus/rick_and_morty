const login = require("../controllers/login");
const postUser = require("../controllers/postUser")
const router = require("express").Router();

router.get("/login", login);
router.post("/login", postUser);

module.exports = router;
