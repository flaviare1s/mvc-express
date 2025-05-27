import express, { json } from "express";
import userRouter from "./routes/user.routes.js";

export const app = express();

app.use(json());

app.use("/users", userRouter);


