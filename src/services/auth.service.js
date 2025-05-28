import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository.js";

class AuthService {
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET;
    this.tokenExpiration = process.env.JWT_EXPIRATION;
  }

  async login(email, senha) {
    // ver se o usuário existe
    const user = await userRepository.findByEmail(email);
    if (!user) {
      const error = new Error("Email ou senha inválidos");
      error.statusCode = 401;
      throw error;
    }

    // verificar senha
    const senhaValida = bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      const error = new Error("Email ou senha inválidos");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      this.jwtSecret,
      { expiresIn: this.tokenExpiration }
    );
    return { token };
  }
}

export default new AuthService();
