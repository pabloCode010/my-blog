const VideoService = require("../../services/videoService");
const PostService = require("../../services/postService");

const search = async (req, res, next) => {
  try {
    const query = req.query.q;
    const postsResult = await PostService.search(query, {
      _id: 0,
      title: 1,
      description: 1,
    });

    res.render("search", { posts: postsResult, query })
  } catch (error) {
    next(error);
  }
};

module.exports = {
  search,
};
