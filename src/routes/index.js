const { Router } = require("express");
const router = Router();

const renderHomePage = require("../controllers/homeController");
const renderAboutMePage = require("../controllers/aboutMeController");

router.get("/", renderHomePage);
router.get("/about-me", renderAboutMePage);

module.exports = router;