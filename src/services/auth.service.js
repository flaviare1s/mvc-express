import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/user.repository.js";

class AuthService {
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET;
    this.tokenExpiration = process.env.JWT_EXPIRATION;

    // Bind do authenticate
    this.authenticate = this.authenticate.bind(this);
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
    const senhaValida = await bcrypt.compare(senha, user.senha);
    console.log(senhaValida);

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

  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.jwtSecret);
      return decoded;
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        const authError = new Error("Token expirado!");
        authError.statusCode = 401;
        throw authError;
      }
      const authError = new Error("Token inválido!");
      authError.statusCode = 401;
      throw authError;
    }
  }

  // Middleware que verifica token
  authenticate = (req, _res, next) => {
    try {
      console.log(req);
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        const error = new Error("Token não fornecido");
        error.statusCode = 401;
        throw error;
      }

      const parts = authHeader.split(" ");
      if (parts.length !== 2) {
        const error = new Error("Token mal formatado");
        error.statusCode = 401;
        throw error;
      }

      const [scheme, token] = parts;
      if (!/^Bearer$/i.test(scheme)) {
        const error = new Error("Token mal formatado");
        error.statusCode = 401;
        throw error;
      }

      const decoded = this.verifyToken(token);
      req.user = decoded;
      next();
    } catch (err) {
      next(err);
    }
  };
}

export default new AuthService();
