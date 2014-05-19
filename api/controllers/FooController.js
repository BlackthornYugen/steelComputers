/**
 * FooController
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

var FooController = {
    index: function(req, res) {
        Foo.find().limit(100).exec(function (err, foo) {
            var viewData = {title: "Foo", bread: false, fooArray: foo};

            if(req.url.split('').reverse()[0] !== "/") {
                res.redirect(req.url+'/',301);
            }

            if (req.isJson || req.isSocket){
                return res.json(viewData);
            } else {
                return res.view('Foo/index', viewData);
            }
        });

    },

    bread: function(req, res) {
        var viewData = {title:"Bread?", bread:true};

        if (req.isJson || req.isSocket){
            return res.json(viewData);
        } else {
            return res.view("Foo/bread", viewData);
        }
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to BlogController)
     */
    _config: {}
}

module.exports = FooController;