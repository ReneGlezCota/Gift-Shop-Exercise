var express = require('express'),
	Sequelize = require('sequelize'),
	flash = require('connect-flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	favicon = require('serve-favicon'),
	https = require('https');	

var app = express();
var port = process.env.PORT || 8081; 

app.use(favicon(__dirname + '/favicon.ico'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var engines = require('consolidate');

app.set('views', __dirname + '/public/source');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

require('./app/routes/index.js')(app);

app.listen(port);

console.log('Server listening on: ' + port);