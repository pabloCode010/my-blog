const mongoose = require("mongoose");

const videoLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    index: -1,
  },
});

const videoLink = mongoose.model("video-link", videoLinkSchema);

module.exports = videoLink;
