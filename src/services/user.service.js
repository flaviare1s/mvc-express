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
}

export default new UserService();
