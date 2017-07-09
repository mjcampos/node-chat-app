var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = "Admin";
		var text = "She doesn't get it";

		var res = generateMessage(from, text);

		expect(res.createdAt).toBeA('number');
		expect(res).toInclude({from, text});
	});
});