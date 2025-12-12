import { Router } from "express";
import { controllerMethods } from "./UserController.js";
import authMiddleware from "../middlewares/auth-Middleware.js";

const router = Router();

router.post("/register", controllerMethods.registation);
router.post("/login", controllerMethods.login);
router.get("/me",authMiddleware, controllerMethods.me);

export default router;