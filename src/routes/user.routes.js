import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários do sistema
 */

/**
 * @swagger
 * /users:
 *   post:
 *     tags: [Usuários]
 *     summary: Cria um novo usuário
 *     description: Cria um novo usuário no sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "joao@exemplo.com"
 *               senha:
 *                 type: string
 *                 format: password
 *                 example: "123456"
 *               role: 
 *                 type: enum
 *                 enum: [ADMIN, ALUNO, PROFESSOR]
 *                 example: "admin"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   get:
 *     tags: [Usuários]
 *     summary: Lista todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [Usuários]
 *     summary: Obtém um usuário específico
 *     description: Retorna os dados de um usuário pelo seu ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   put:
 *     tags: [Usuários]
 *     summary: Atualiza um usuário
 *     description: Atualiza os dados de um usuário existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                 format: email
 *                 example: "joao@exemplo.com"
 *               senha:
 *                 type: string
 *                 format: password
 *                 example: "novasenha"
 *               role: 
 *                  type: enum
 *                  enum: [ADMIN, ALUNO, PROFESSOR]
 *                  example: admin
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   delete:
 *     tags: [Usuários]
 *     summary: Remove um usuário
 *     description: Remove um usuário do sistema
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;
