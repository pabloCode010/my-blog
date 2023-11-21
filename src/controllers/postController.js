const renderPostPage = (req, res, next) => {
    res.status(200).render("post");
}

module.exports = renderPostPage;