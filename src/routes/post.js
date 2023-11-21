const { Router } = require("express");
const renderPostPage = require("../controllers/postController");
const router = Router();

router.get("/post/:title", renderPostPage);

module.exports = router;