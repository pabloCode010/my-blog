const { Router } = require("express");
const router = Router();

const renderHomePage = require("../controllers/homeController");

router.get("/", renderHomePage)

module.exports = router;