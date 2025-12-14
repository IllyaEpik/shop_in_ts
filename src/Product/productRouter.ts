import { Router } from "express";
import { productController } from "./productController.js";
const router = Router();

router.post("/", productController.create);

export default router;
