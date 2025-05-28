import authService from "../services/auth.service.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        const error = new Error("Email e senha são obrigatório");
        error.statusCode = 400;
        throw error;
      }

      const result = await authService.login(email, senha);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
