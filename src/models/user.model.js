import { randomUUID } from "crypto";

class User {
  constructor({ email, senha, role }) {
    this.id = randomUUID();
    this.email = email;
    this.senha = senha;
    this.role = role;
    this.criadoEm = new Date();
    this.atualizadoEm = new Date();
  }
}

export default User;
