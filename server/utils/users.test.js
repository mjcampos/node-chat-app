var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();

		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node course'
		}, {
			id: '2',
			name: 'Jen',
			room: 'React course'
		}, {
			id: '3',
			name: 'Julie',
			room: 'Node course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Michael',
			room: 'Germany fans'
		};

		var res = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should not add user if duplicate name and room', () => {
		var user = {
			id: '4',
			name: 'Mike',
			room: 'Node course'
		}

		var res = users.addUser(user.id, user.name, user.room);

		expect(users.users.length).toBe(3);
	});

	it('should add user if duplicate name but different room', () => {
		var user = {
			id: '5',
			name: 'Mike',
			room: 'Rails course'
		}

		var res = users.addUser(user.id, user.name, user.room);

		expect(res).toEqual(user);
	});

	it('should remove a user', () => {
		var userId = '2';
		var res = users.removeUser(userId);

		expect(res.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = '99';
		var res = users.removeUser(userId);

		expect(res).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '4';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node course');

		expect(userList).toEqual(['Mike', 'Julie']);
	});

	it('should return names for react course', () => {
		var userList = users.getUserList('React course');

		expect(userList).toEqual(['Jen']);
	});
});