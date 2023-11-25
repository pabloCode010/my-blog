const Post = require("../models/post");
const RecommendedPost = require("../models/recommendedPost");
const boom = require("@hapi/boom");

class PostService {
  async getLatestPosts(select, limit) {
    try {
      const latsPosts = await Post.find({}, select)
        .sort({ date: -1 })
        .limit(limit);

      return latsPosts;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }
  
  async getRecommendedPosts(select, limit) {
    try {
      const recommendedPosts = await RecommendedPost.find({})
        .populate("post", select)
        .limit(limit);

      return recommendedPosts.map(recommend => recommend.post);
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

  async findByTitle(select, title){
    try {
      const findPost = await Post.findOne({ title }, select);
      return findPost;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }
}

module.exports = PostService;