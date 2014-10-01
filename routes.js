module.exports = {


  bind : function(app) {


    // Home
    app.get('/', function(req, res) {
      res.render('index', {title : 'Home', content: 'This is the content for the home us page.'});
    });


    // About
    app.get('/about', function(req, res) {
      res.render('about/about', {title: 'About', content: 'This is the content for the about us page.'});
    });


    // Services
    app.get('/services', function(req, res) {
      res.render('services/services', {title: 'Services', content: 'This is the content for the services page.'});
    });


  }


};