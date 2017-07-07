var path = require('path');
var http = require('http');
var express = require('express');
var publicPath = path.join(__dirname, '../public');
var app = express();
var socketIO = require('socket.io');
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log("New user connected");

	socket.on('disconnect', () => {
		console.log("User was disconnected");
	});
});

var port = process.env.PORT || 8888;

server.listen(port, () => {
	console.log("Server running on port " + port);
});