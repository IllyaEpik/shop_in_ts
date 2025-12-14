import express from "express";
import authRouter from "./User/UserRouter.js";
import productRouter from "./Product/productRouter.js";

const app = express()
const PORT = 8000
const HOST = "127.0.0.1"
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})