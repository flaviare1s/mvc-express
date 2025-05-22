import userService from "../services/user.service.js";

class UserController {
  create(req, res, next) {
    try {
      const user = userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  findAll(_req, res, next) {
    try {
      const users = userService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  findById(req, res, next) {
    try {
      const user = userService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  update(req, res, next) {
    try {
      const updated = userService.updateUser(req.params.id, req.body);
      if (!updated)
        return res.status(404).json({ message: "Usuário não encontrado!" });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  delete(req, res, next) {
    try {
      const deleted = userService.deleteUser(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Usuário não encontrado!" });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
