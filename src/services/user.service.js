import User from "../models/user.model.js";
import userRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

class UserService {
  async createUser(data) {
    // Validação de email único
    const existingUser = await userRepository.findByEmail(data.email);
    if (existingUser) {
      const error = new Error("Email já cadastrado!");
      error.statusCode = 400;
      throw error;
    }

    // Verificação de role
    if (!["admin", "professor", "aluno"].includes(data.role)) {
      const error = new Error("Perfil de acesso inválido!");
      error.statusCode = 400;
      throw error;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.senha, saltRounds);
    data.senha = hashedPassword;

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
