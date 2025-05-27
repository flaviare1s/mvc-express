import Endereco from "../models/endereco.model.js";
import enderecoRepository from "../repositories/endereco.repository.js";

class EnderecoService {
  createEndereco(data) {
    const endereco = new Endereco(data);
    return enderecoRepository.create(endereco);
  }

  getEnderecos() {
    return enderecoRepository.findAll();
  }

  getEnderecoById(id) {
    return enderecoRepository.findById(id);
  }

  updateEndereco(id, data) {
    const endereco = enderecoRepository.findById(id);
    if (!endereco) {
      const error = new Error("Endereço não encontrado!");
      error.statusCode = 404;
      throw error;
    }
    Object.assign(endereco, data, { atualizadoEm: new Date() });
    return enderecoRepository.update(id, endereco);
  }

  deleteEndereco(id) {
    return enderecoRepository.delete(id);
  }
}

export default new EnderecoService();
