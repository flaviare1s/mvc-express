import { pool } from "../config/database.js";

class AlunoRepository {
  async create(aluno) {
    const [usuario] = await pool.execute(
      "SELECT id FROM usuario WHERE id = ?",
      [aluno.usuario_id]
    );
    if (!usuario[0]) {
      throw new Error("Usuário não encontrado!");
    }
    const [endereco] = await pool.execute(
      "SELECT id FROM endereco WHERE id = ?",
      [aluno.endereco_id]
    );
    if (!endereco[0]) {
      throw new Error("Endereço não encontrado!");
    }

    const [result] = await pool.execute(
      "INSERT INTO aluno (nome, data_nascimento, usuario_id, endereco_id) VALUES (?, ?, ?, ?)",
      [aluno.nome, aluno.data_nascimento, aluno.usuario_id, aluno.endereco_id]
    );
    return result;
  }
}

export default new AlunoRepository();
