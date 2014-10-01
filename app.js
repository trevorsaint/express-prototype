var express = require('express'),
    routes  = require(__dirname + '/routes.js'),
    app     = express(),
    port    = (process.env.PORT || 3000);


// application settings
app.engine('mustache', require('hogan-middleware').__express);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


// routes
routes.bind(app, '/');


// start the app
app.listen(port)
console.log('Listening on port: ' + port);