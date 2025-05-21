import { randomUUID } from "crypto";

export class User {
  constructor({ nome, email }) {
    this.id = randomUUID();
    this.nome = nome;
    this.email = email;
    this.criadoEm = new Date();
    this.atualizadoEm = new Date();
  }
}
