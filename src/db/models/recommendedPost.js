const mongoose = require("mongoose");

const recommendedPostSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  }
});

const RecommendedPost = mongoose.model("recommended-post", recommendedPostSchema );

module.exports = RecommendedPost;