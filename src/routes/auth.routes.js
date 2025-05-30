import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Autenticação
 *  description: Endpoints de autenticação
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Autenticação]
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@exemplo.com
 *               senha:
 *                 type: string
 *                 format: password
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                 email_verificado:
 *                   type: boolean
 *       400:
 *         description: Email e senha são obrigatórios!
 *       401:
 *          description: Email ou senha inválidos!
 *       500:
 *         description: Erro interno do servidor
 */

router.post("/login", authController.login);

export default router;
