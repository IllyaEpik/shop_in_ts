import express from "express";
import authRouter from "./User/UserRouter";
import productRouter from "./Product/productRouter";
import { categoryRouter } from './Category/category.router';
// import productRouter from "./Product/productRouter";

const app = express();

app.use(express.json());
app.use("/products", productRouter);
app.use("/user", authRouter);
app.use('/api/categories', categoryRouter);


const PORT = 8000
const HOST = "127.0.0.1"
app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})
