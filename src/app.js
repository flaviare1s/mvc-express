import express, { json } from "express";
import userRouter from "./routes/user.routes.js";
import enderecoRouter from "./routes/endereco.routes.js";
import authRouter from "./routes/auth.routes.js";
import alunoRouter from "./routes/aluno.routes.js";
import authService from "./services/auth.service.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

export const app = express();

app.use(json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRouter);
app.use("/users", userRouter);

// Rotas privadas
app.use(authService.authenticate)
app.use("/enderecos", enderecoRouter);
app.use("/alunos", alunoRouter);
