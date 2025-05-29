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
    return this.findById(result.insertId);
  }

  async findAll() {
    const [rows] = await pool.execute("SELECT ");
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute(
      "SELECT a.nome, a.data_nascimento, u.email, e.rua, e.numero, e.cidade, e.estado FROM aluno a INNER JOIN usuario u ON a.usuario_id = u.id INNER JOIN endereco e ON a.endereco_id = e.id WHERE a.id = ?",
      [id]
    );
    if (!rows[0]) return null;

    const row = rows[0];
    return {
      id: row.id,
      nome: row.nome,
      data_nascimento: row.data_nascimento,
      email: row.email,
      endereco: {
        rua: row.rua,
        numero: row.numero,
        cidade: row.cidade,
        estado: row.estado
      },
      criado_em: row.criado_em,
      atualizado_em: row.atualizado_em
    }
  }
}

export default new AlunoRepository();
