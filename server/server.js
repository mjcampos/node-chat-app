var path = require('path');
var http = require('http');
var express = require('express');
var publicPath = path.join(__dirname, '../public');
var app = express();
var socketIO = require('socket.io');

var {generateMessage, generateLocationMessage} = require('./utils/message');
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log("New user connected");

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

	socket.on('createMessage', (message, callback) => {
		console.log("createMessage", message);

		io.emit('newMessage', generateMessage(message.from, message.text));
		callback();	
	});

	socket.on('createLocationMessage', (coords) => {
		io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
	});

	socket.on('disconnect', () => {
		console.log("User was disconnected");
	});
});

var port = process.env.PORT || 8888;

server.listen(port, () => {
	console.log("Server running on port " + port);
});