/**
 * ArticleController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res) {
    var params = {
      title: req.param('title'),
      text: req.param('text')
    };
    Article.create(params).exec(function (err, articleList) {
      if (err) return res.send(500);
      return res.json(articleList);
    });
  },

  watch: function (req, res) {
    var articleId = req.param('article_id');
    if (!articleId) return res.send(500);

    var findObj = {id: articleId};
    Article.findOne(findObj)
      .exec(function (err, articleList) {
        if (!articleList) return res.send(404);
        if (err) return res.send(500);
        return res.json(articleList);
      });
  },

  list: function (req, res) {
    Article.find()
      .exec(function (err, articleList) {
        if (!articleList) return res.send(404);
        if (err) return res.send(500);
        return res.json(articleList);
      });
  }

};

