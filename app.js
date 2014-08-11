var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = module.exports = express();

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index', { title: 'Angular Workshop' });
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
