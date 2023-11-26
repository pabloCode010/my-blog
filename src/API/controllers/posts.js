const Service = require("../../services/postService");
const PostService = new Service();

const getPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await PostService.findById((id = postId));

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const posts = await PostService.getAll(limit);

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const newPost = await PostService.create(req.body);

    res.sendStatus(204);
  } catch (error) {
    next(error)
  }
}

const createRecommendedPost = async (req, res, next) => {
  try {
    const { id } = req.query;
    const newRecommendation = await PostService.createRecommendedPost(id);
    
    res.sendStatus(204);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getPost,
  getAllPosts,
  createPost,
  createRecommendedPost
};
