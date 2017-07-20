class Users {
	constructor () {
		this.users = [];
	}

	addUser (id, name, room) {
		// Check if name already exists in array
		for(var i = 0; i < this.users.length; i++) {
			if ((this.users[i].name === name) && (this.users[i].room === room)) {
				return null;
			};
		}

		// If it doesn't then continue
		var user = {id, name, room};

		this.users.push(user);

		return user;
	}

	removeUser (id) {
		// return user that was removed
		var user = this.getUser(id);

		if (user) {
			this.users = this.users.filter ((user) => user.id !== id);
		};

		return user;
	}

	getUser (id) {
		var user = this.users.filter((user) => user.id === id);

		return user[0];
	}

	getUserList (room) {
		var users = this.users.filter((user) => user.room === room);
		var namesArr = users.map((user) => user.name);

		return namesArr;
	}
}

module.exports = {Users};