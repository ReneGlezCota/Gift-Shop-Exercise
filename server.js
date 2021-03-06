var express = require('express'),
	Sequelize = require('sequelize'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	favicon = require('serve-favicon'),
	engines = require('consolidate'),	
	compression = require('compression');	

var app = express();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/public/source');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(compression());
app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public/source'));

require('./app/routes/index.js')(app);

app.all('*', function(req, res) {
	if (req.method === 'GET') {
		res.status(404).send('<h1> 404 </h1> <h2> Page not found </h2>');
	} else {
		res.status(404).send({
			status: 'error',
			errorType: 'Page not found',
			message: 'URI could not be reached, please verify the URI endpoint in order to access to the resource you are looking for.'
		});
	}
});

app.listen(port);

console.log('Server listening on: ' + port);