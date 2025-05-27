import userService from "../services/user.service.js";

class UserController {
  async create(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async findAll(_req, res, next) {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async findById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updated = await userService.updateUser(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: "Usuário não encontrado!" });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const deleted = await userService.deleteUser(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Usuário não encontrado!" });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
