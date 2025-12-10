import express from "express";
import productRouter from "./Product/productRouter";
import authRouter from "./User/UserRouter.js";

const app = express();

app.use(express.json());
app.use("/products", productRouter);
app.use("/auth", authRouter);


const PORT = 8000
const HOST = "127.0.0.1"
app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})
