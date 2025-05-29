import express from "express";
import alunoController from "../controllers/aluno.controller.js";

const router = express.Router()
router.post('/', alunoController.create)

export default router;
