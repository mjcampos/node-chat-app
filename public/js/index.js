var socket = io();

socket.on('connect', function() {
	console.log("Connected to server");

	socket.emit('createMessage', {
		from: 'ben@example.com',
		text: 'Hi. You are so dumb. do you know that?'
	});
});

socket.on('disconnect', function() {
	console.log("Disconnected from server");
});

socket.on('newMessage', function(email) {
	console.log("newMessage", email);
});