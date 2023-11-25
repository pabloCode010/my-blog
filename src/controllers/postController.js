const Service = require("../services/postService");
const PostService = new Service();

const renderPostPage = async (req, res, next) => {
  try {
    const { title } = req.params;
    const { content } = await PostService.findByTitle({_id: 0, content: 1} ,title);
    
    res.status(200).render("post", { content });
  } catch (error) {
    next(error);
  }
};

module.exports = renderPostPage;