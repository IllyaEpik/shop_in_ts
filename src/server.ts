import express from "express";
import authRouter from "./User/UserRouter";
import productRouter from "./Product/productRouter";
import { categoryRouter } from './Category/categoryRouter';
import orderRouter from "./Order/OrderRouter";
// import productRouter from "./Product/productRouter";

const app = express();

app.use(express.json());
app.use("/products", productRouter);
app.use("/user", authRouter);
app.use('/api/categories', categoryRouter);

app.use("/orders", orderRouter);

const PORT = 8000
const HOST = "127.0.0.1"
app.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})
