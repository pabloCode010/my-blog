const { Router } = require("express");
const router = Router();

const {
  renderAboutMePage,
  renderPostPage,
  renderHomePage,
} = require("./controllers/public-routes");
const { search } = require("./controllers/search");

router.get("/", renderHomePage);
router.get("/about-me", renderAboutMePage);
router.get("/post/:title", renderPostPage);
router.get("/search", search);

module.exports = router;
