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
}

export default new UserController();
