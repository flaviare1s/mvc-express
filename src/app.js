import express, { json } from "express";
import userRouter from "./routes/user.routes.js";
import enderecoRouter from "./routes/endereco.router.js";
import authRouter from "./routes/auth.routes.js";

export const app = express();

app.use(json());

app.use("/users", userRouter);
app.use("/enderecos", enderecoRouter);
app.use("/auth", authRouter);
