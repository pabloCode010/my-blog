const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  categories: [String],
  date: {
    type: Date,
    default: Date.now,
    index: -1
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
