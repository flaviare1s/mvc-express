import User from "../models/user.model.js";
import userRepository from "../repositories/user.repository.js";

class UserService {
  createUser(data) {
    const user = new User(data);
    return userRepository.create(user)
  }
};

export default new UserService();
