const VideoLink = require("../db/models/videoLink");
const boom = require("@hapi/boom");

class VideoService {
  async getLatest(limit, select = {}) {
    try {
      const latsVideos = await VideoLink.find({}, select)
        .sort({ date: -1 })
        .limit(limit);

      return latsVideos;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }
}

module.exports = new VideoService();