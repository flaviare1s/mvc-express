import express from "express";
import enderecoController from "../controllers/endereco.controller.js";

const router = express.Router();

router.post("/", enderecoController.create);
router.get("/", enderecoController.findAll);
router.get("/:id", enderecoController.findById);
router.put("/:id", enderecoController.update);
router.delete("/:id", enderecoController.delete);

export default router;
