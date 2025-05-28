import { pool } from "../config/database.js";

class UserRepository {
  async create(user) {
    const [result] = await pool.execute(
      "INSERT INTO usuario (email, senha, role) VALUES (?, ?, ?)",
      [user.email, user.senha, user.role]
    );
    return this.findById(result.insertId);
  }

  async findAll() {
    const [rows] = await pool.execute(
      "SELECT id, email, role, criado_em, atualizado_em FROM usuario"
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute(
      "SELECT id, email, role, criado_em, atualizado_em FROM usuario WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  }

  async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT id, email, senha FROM usuario WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  async update(id, data) {
    const [result] = await pool.execute(
      'UPDATE usuario SET email = ?, senha = ?, role = ? WHERE id = ?',
      [data.email, data.senha, data.role, id]
    );
    if(result.affectedRows === 0) return null;
    return this.findById(id);
  }

  async delete(id) {
    const user = await this.findById(id);
    if(!user) return null;

    await pool.execute(
      'DELETE from usuario WHERE id = ?',
      [id]
    );
    return user;
  }
}

export default new UserRepository();
