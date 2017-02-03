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
      text: req.param('text'),
      link: req.param('link')
    };
    Article.create(params).exec(function (err, articleList) {
      if (err) return res.send(500);
      return res.json(articleList);
    });
  },

  watch: function (req, res) {
    var articleId = req.param('article_id');
    var articleLink = req.param('article_link');
    if (!articleId && !articleLink) return res.send(500);

    if(articleId) {
      var findObj = {id: articleId};
    } else {
      var findObj = {link: articleLink};
    }
    Article.findOne(findObj)
      .exec(function (err, articleList) {
        if (!articleList) return res.send(404);
        if (err) return res.send(500);
        return res.json(articleList);
      });
  },

  list: function (req, res) {
    var page = req.param('page');
    var limit = req.param('limit') || 10;

    if(page) {
      Article.find().sort('createdAt DESC').paginate({page: page, limit: limit})
        .exec(function (err, articleList) {
          if (!articleList) return res.send(404);
          if (err) return res.send(500);
          return res.json(articleList);
        });
    } else {
      Article.find().sort('createdAt DESC')
        .exec(function (err, articleList) {
          if (!articleList) return res.send(404);
          if (err) return res.send(500);
          return res.json(articleList);
        });
    }

  }

};

