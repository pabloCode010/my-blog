const Post = require("../db/models/post");
const RecommendedPost = require("../db/models/recommendedPost");
const boom = require("@hapi/boom");

class PostService {
  async getLatest(limit, select={}) {
    try {
      const latsPosts = await Post.find({}, select)
        .sort({ date: -1 })
        .limit(limit);

      return latsPosts;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }
  
  async getRecommended(limit, select={}) {
    try {
      const recommendedPosts = await RecommendedPost.find({})
        .populate("post", select)
        .limit(limit);

      return recommendedPosts.map(recommend => recommend.post);
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

  async getAll(limit=15){
    try {
      const posts = await Post.find({}).limit(limit);
      return posts
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

  async findByTitle(title, select={}){
    try {
      const findPost = await Post.findOne({ title }, select);
      return findPost;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

  async findById(postId, select={}){
    try {
      const findPost = await Post.findById(postId,select);
      return findPost;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }
}

module.exports = new PostService();