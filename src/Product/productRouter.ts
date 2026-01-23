import { Router } from "express";
import { controllerMethods } from "./productController";
import authMiddleware from "../middlewares/auth-Middleware";

const router = Router();

router.post("", authMiddleware, controllerMethods.create);
router.get("", controllerMethods.getAll);
router.get("/find/:id", controllerMethods.getById);
router.put("/:id", authMiddleware, controllerMethods.update);
router.delete("/:id", authMiddleware, controllerMethods.delete);

export default router;