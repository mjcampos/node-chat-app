var expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var str = 123;
		var res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var str = "    ";
		var res = isRealString(str);

		expect(res).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		var str = "   hello world   ";
		var res = isRealString(str);

		expect(res).toBe(true);
	});
});