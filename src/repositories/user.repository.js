let users = [];

class UserRepository {
  create(user) {
    users.push(user);
    return user;
  }

  findAll() {
    return users;
  }

  findById(id) {
    return users.find((user) => user.id === id);
  }
}

export default new UserRepository();
