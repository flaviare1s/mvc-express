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

  update(id, data) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...data };
    return users[index];
  }

  delete(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    const deleted = users.splice(index, 1);
    return deleted[0];
  }
}

export default new UserRepository();
