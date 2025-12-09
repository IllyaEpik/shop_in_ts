import express from "express";
import authRouter from "./User/UserRouter.ts";

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.listen(3000, () => console.log("Server started on port 3000"));
