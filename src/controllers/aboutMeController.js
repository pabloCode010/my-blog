const renderAboutMePage = (req, res, next) => {
  res.status(200).render("about-me");
}

module.exports = renderAboutMePage;