const mongoose = require("mongoose");

const recommendedPostSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }
});

const RecommendedPost = mongoose.model("RecommendedPost", recommendedPostSchema );

module.exports = RecommendedPost;