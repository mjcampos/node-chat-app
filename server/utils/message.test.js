var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = "Admin";
		var text = "She doesn't get it";

		var res = generateMessage(from, text);

		expect(res.createdAt).toBeA('number');
		expect(res).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = "User";
		var latitude = 37;
		var longitude = -121;
		var url = "https://www.google.com/maps?q=37,-121";

		var res = generateLocationMessage(from, latitude, longitude);

		expect(res.createdAt).toBeA('number');
		expect(res).toInclude({from, url})
	});
});


//https://www.google.com/maps?q=37.3303249,-121.78730809999999