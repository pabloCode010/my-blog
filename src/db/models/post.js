const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    index: -1,
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
