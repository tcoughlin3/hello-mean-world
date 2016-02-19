var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname + '/'));
var port = process.env.PORT || 8000;

server.listen(port);
console.log('Listening on port ' + port);

mongoose.connect('mongodb://localhost/hello-mean-world');

// Controllers - This does not appear to be working.
var controller = function(request, response, next) {
	response.status(200).send('The server sent you a string!');
	console.log('in controller');
}

// Routes
server.get('/', controller);
server.post('/', controller);
server.get('/', function(request, response, next) {
	console.log('in GET handler'); // <== NOTHING
	response.send('Handled GET');
});

module.exports = server;