import { Router } from "express";
import { controllerMethods } from "./productController";
import authMiddleware from "../middlewares/auth-Middleware";

const router = Router();

router.get("", controllerMethods.getAll);
router.get("/:id", controllerMethods.getById);
router.get("/count/:categoryId", controllerMethods.countProducts);

router.post("", authMiddleware, controllerMethods.create);

router.put("/:id", authMiddleware, controllerMethods.update);

router.delete("/:id", authMiddleware, controllerMethods.delete);

export default router;