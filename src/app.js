import express, { json } from "express";
import userRouter from "./routes/user.routes.js";
import enderecoRouter from "./routes/endereco.routes.js";
import authRouter from "./routes/auth.routes.js";
import alunoRouter from "./routes/aluno.routes.js";
import authService from "./services/auth.service.js";

export const app = express();

app.use(json());

app.use("/auth", authRouter);

// Rotas privadas
app.use(authService.authenticate)
app.use("/users", userRouter);
app.use("/enderecos", enderecoRouter);
app.use("/alunos", alunoRouter);
