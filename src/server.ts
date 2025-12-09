import express from "express";
import productRouter from "./Product/productRouter";

const app = express();

app.use(express.json());
app.use("/products", productRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
