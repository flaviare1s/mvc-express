import { User } from "../models/user.model";
import userRepository from "../repositories/user.repository";

const UserService = {
  createUser(data) {
    const user = new User(data);
    return userRepository.create(user)
  },
};

export default new UserService();
