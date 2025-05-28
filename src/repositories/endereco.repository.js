import { pool } from "../config/database.js";

class EnderecoRepository {
  async create(endereco) {
    const [result] = await pool.execute(
      "INSERT INTO endereco (rua, numero, cidade, estado, cep, complemento) VALUES (?, ?, ?, ?, ?, ?)",
      [endereco.rua, endereco.numero, endereco.cidade, endereco.estado, endereco.cep, endereco.complemento || null]
    );
    return this.findById(result.insertId);
  }

  async findAll() {
    const [rows] = await pool.execute(
      "SELECT id, rua, numero, cidade, estado, cep, complemento, criado_em, atualizado_em FROM endereco"
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute(
      "SELECT id, rua, numero, cidade, estado, cep, complemento, criado_em, atualizado_em FROM endereco WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  }

  async update(id, data) {
    const [result] = await pool.execute(
      "UPDATE endereco SET rua = ?, numero = ?, cidade = ?, estado = ?, cep = ?, complemento = ? WHERE id = ?",
      [data.rua, data.numero, data.cidade, data.estado, data.cep, data.complemento, id]
    );
    if (result.affectedRows === 0) return null;
    return this.findById(id);
  }

  async delete(id) {
    const endereco = await this.findById(id);
    if (!endereco) return null;

    await pool.execute("DELETE from endereco WHERE id = ?", [id]);
    return endereco;
  }
}

export default new EnderecoRepository();
