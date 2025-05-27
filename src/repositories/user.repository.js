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

  update(id, data) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...data };
    return users[index];
  }

  delete(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    const deleted = users.splice(index, 1);
    return deleted[0];
  }
}

export default new UserRepository();
