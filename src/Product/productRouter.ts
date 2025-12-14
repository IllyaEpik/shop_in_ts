import { Router } from "express";
import { controllerMethods } from "./productController";
import authMiddleware from "../middlewares/auth-Middleware";

const router = Router();

router.post("/create", authMiddleware, controllerMethods.create);
router.put("/update/:id", authMiddleware, controllerMethods.update);
router.delete("/delete/:id", authMiddleware, controllerMethods.delete);

export default router;