import enderecoService from "../services/endereco.service.js";

class EnderecoController {
  async create(req, res, next) {
    try {
      const endereco = await enderecoService.createEndereco(req.body);
      res.status(201).json(endereco);
    } catch (err) {
      next(err);
    }
  }

  async findAll(_req, res, next) {
    try {
      const enderecos = await enderecoService.getEnderecos();
      res.status(200).json(enderecos);
    } catch (err) {
      next(err);
    }
  }

  async findById(req, res, next) {
    try {
      const endereco = await enderecoService.getEnderecoById(req.params.id);
      res.status(200).json(endereco);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updated = await enderecoService.updateEndereco(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: "Endereço não encontrado!" });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const deleted = await enderecoService.deleteEndereco(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Endereço não encontrado!" });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new EnderecoController();
