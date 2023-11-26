const Post = require("../models/post");
const RecommendedPost = require("../models/recommendedPost");
const boom = require("@hapi/boom");

class PostService {
  async create(data){
    try {
      const newPost = new Post(data);
      await newPost.save();
      return newPost;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

  async createRecommendedPost(postId) {
    try {
      console.log("id", postId);
      const newRecommendation = new RecommendedPost({ post: postId });
      await newRecommendation.save();
      return newRecommendation;
    } catch ({ message }) {
      throw new boom.internal(message);
    }
  }

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

module.exports = PostService;