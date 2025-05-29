import alunoService from "../services/aluno.service.js";

class AlunoController {
  async create(req, res, next) {
    try {
      const aluno = await alunoService.createAluno(req.body);
      res.status(201).json(aluno);
    } catch (err) {
      next(err);
    }
  }
}

export default new AlunoController();
