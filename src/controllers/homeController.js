const Service = require("../services/postService");
const PostService = new Service();

const renderHomePage = async (req, res, next) => {
  try {
    const latestPosts = await PostService.getLatest(3, {
      _id: 0,
      title: 1,
      summary: 1,
      imageUrl: 1
    });
    const recommendedPosts = await PostService.getRecommended(6, {
      _id: 0,
      title: 1,
      summary: 1,
      imageUrl: 1
    });

    res.status(200).render("home", { latestPosts, recommendedPosts });
  } catch (error) {
    next(error);
  }
};
module.exports = renderHomePage;
