const marked = require("marked").marked;
const Service = require("../../services/postService");
const PostService = new Service();

const renderPostPage = async (req, res, next) => {
  try {
    const { title } = req.params;
    const { content, imageUrl, summary } = await PostService.findByTitle(
      title,
      { _id: 0, content: 1, imageUrl: 1, summary: 1 }
    );
    res.status(200).render("post", {
      content: marked(content),
      title,
      summary,
      imageUrl,
    });
  } catch (error) {
    next(error);
  }
};

const renderHomePage = async (req, res, next) => {
  try {
    const latestPosts = await PostService.getLatest(3, {
      _id: 0,
      title: 1,
      summary: 1,
      imageUrl: 1,
    });
    const recommendedPosts = await PostService.getRecommended(6, {
      _id: 0,
      title: 1,
      summary: 1,
      imageUrl: 1,
    });

    res.status(200).render("home", { latestPosts, recommendedPosts });
  } catch (error) {
    next(error);
  }
};

const renderAboutMePage = (req, res, next) => {
  res.status(200).render("about-me");
};

module.exports = {
  renderPostPage,
  renderHomePage,
  renderAboutMePage,
};

// const markdownContent = "# Hello, GitHub Markdown API\n\nThis is **bold** text.";

// fetch('https://api.github.com/markdown', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     text: markdownContent,
//   }),
// })
//   .then(response => response.text())
//   .then(html => {
//     // El contenido HTML generado está en la variable 'html'
//     console.log(html);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });