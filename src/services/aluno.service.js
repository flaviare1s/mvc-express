import Aluno from "../models/aluno.model.js";
import alunoRepository from "../repositories/aluno.repository.js";

class AlunoService {
    async createAluno(data) {
        const aluno = new Aluno(data)
        return await alunoRepository.create(aluno)
    }
}

export default new AlunoService();
