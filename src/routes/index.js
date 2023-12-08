const { Router } = require("express");
const router = Router();

const { renderAboutMePage, renderPostPage, renderHomePage } = require("./controllers/public-routes")

router.get("/", renderHomePage);
router.get("/about-me", renderAboutMePage);
router.get("/post/:title", renderPostPage);

module.exports = router;