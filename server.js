var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
server.use(express.static(__dirname + '/'));
var port = process.env.PORT || 8000;

////////////////////////////////////////////////////////////////////////////
//// SERVER
////////////////////////////////////////////////////////////////////////////

server.listen(port);
console.log('Listening on port ' + port);

// Controllers - This does not appear to be working.
var controller = function(request, response, next) {
	response.status(200).send('The server sent you a string!');
	console.log('in server controller');
};

// Routes
server.get('/', controller);
server.post('/', controller);
server.get('/', function(request, response, next) {
	console.log('in GET handler'); // <== NOTHING
	response.send('Handled GET');
});

////////////////////////////////////////////////////////////////////////////////
//// DB
////////////////////////////////////////////////////////////////////////////////
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/hello-mean-worlddb'
;
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
	console.log('MongoDB connection open');
});

module.exports = db;
module.exports = server;