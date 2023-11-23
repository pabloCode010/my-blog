const Service = require("../services/posts-service");
const postsService = new Service();

const renderHomePage = (req, res, next) => {
    const latestPosts = postsService.getLatestPosts();
    const recommendedPosts = postsService.getRecommendedPosts();
    
    res.status(200).render("home", { latestPosts, recommendedPosts });
}
module.exports = renderHomePage;