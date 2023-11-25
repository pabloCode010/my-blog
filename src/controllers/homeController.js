const Service = require("../services/postService");
const PostService = new Service();

const renderHomePage = async (req, res, next) => {
  try {
    const latestPosts = await PostService.getLatestPosts(
      select={ _id: 0, title: 1, summary: 1, imageUrl: 1 },
      limit=3
    );
    const recommendedPosts = await PostService.getRecommendedPosts(
      select={ _id: 0, title: 1, summary: 1, imageUrl: 1 }, 
      limt=6
    );

    res.status(200).render("home", { latestPosts, recommendedPosts });
  } catch (error) {
    next(error);
  }
};
module.exports = renderHomePage;