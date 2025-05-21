let users = [];

class UserRepository {
  create(user) {
    users.push(user);
    return user;
  }
}

export default new UserRepository();
