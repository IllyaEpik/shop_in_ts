import { Router } from "express";
import { controllerMethods } from "./productController";

const router = Router();

router.post("/products", controllerMethods.create);
router.put("/products/:id", controllerMethods.update);
router.delete("/products/:id", controllerMethods.delete);

export default router;
