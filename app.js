var express = require('express'),
    routes  = require(__dirname + '/routes.js'),
    app     = express();


// application settings
app.engine('mustache', require('hogan-middleware').__express);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


// routes
routes.bind(app, '/');


// start the app
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});