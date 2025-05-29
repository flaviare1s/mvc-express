import Aluno from "../models/aluno.model.js";
import alunoRepository from "../repositories/aluno.repository.js";

class AlunoService {
  async createAluno(data) {
    // Validação dos campos
    if (
      !data.nome ||
      !data.data_nascimento ||
      !data.usuario_id ||
      data.endereco_id
    ) {
      const error = new Error("Todos os campos são obrigatórios!");
      error.statusCode = 400;
      throw error;
    }

    if (data_nascimento > new Date()) {
      const error = new Error("Data de nascimento não pode ser futura!");
      error.statusCode = 400;
      throw error;
    }

    const aluno = new Aluno(data);
    return await alunoRepository.create(aluno);
  }
}

export default new AlunoService();
