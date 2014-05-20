/**
 * BlogController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  index: function (req, res) {
      if(req.url.split('').reverse()[0] !== "/") {
          return res.redirect(req.url+'/', 301);
      } else {
          Blog.find().limit(100).exec(function (err, blogs) {
              if (req.isJson || req.isSocket) {
                  return res.json({blogs: blogs});
              } else {
                  return res.view('blog/index', {title: 'Blogs', blogs: blogs});
              }
          });
      }
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to BlogController)
   */
  _config: {}

  
};
