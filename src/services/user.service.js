import User from "../models/user.model.js";
import userRepository from "../repositories/user.repository.js";

class UserService {
  createUser(data) {
    const user = new User(data);
    return userRepository.create(user);
  }

  getUsers() {
    return userRepository.findAll();
  }

  getUserById(id) {
    return userRepository.findById(id);
  }

  updateUser(id, data) {
    const user = userRepository.findById(id);
    if (!user) {
      const error = new Error("Usuário não encontrado!");
      error.statusCode = 404;
      throw error;
    }
    Object.assign(user, data, { atualizadoEm: new Date() });
    return userRepository.update(id, user);
  }

  deleteUser(id) {
    return userRepository.delete(id);
  }
}

export default new UserService();
