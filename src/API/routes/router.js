const { Router } = require("express");
const { getPost, getAllPosts, createPost, createRecommendedPost } = require("../controllers/posts");

const router = Router();

router.get("/api/post/all", getAllPosts);
router.get("/api/post/:postId", getPost);
router.post("/api/post/create", createPost);
router.post("/api/post/create-recommended-post", createRecommendedPost);

module.exports = router;