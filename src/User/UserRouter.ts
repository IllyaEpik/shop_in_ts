import { Router } from "express";
import { controllerMethods } from "./UserController";
import authMiddleware from "../middlewares/auth-Middleware";

const router = Router();

router.post("/register", controllerMethods.registation);
router.post("/login", controllerMethods.login);
router.get("/me",authMiddleware, controllerMethods.me);

export default router;