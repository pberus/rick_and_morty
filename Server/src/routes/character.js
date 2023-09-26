const getCharById = require("../controllers/getCharById");
const router = require("express").Router();

router.get("/character/:id", getCharById);

module.exports = router;
