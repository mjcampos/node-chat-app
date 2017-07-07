var path = require('path');
var express = require('express');
var publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

var port = process.env.PORT || 8888;

app.listen(port, () => {
	console.log("Server running on port " + port);
});