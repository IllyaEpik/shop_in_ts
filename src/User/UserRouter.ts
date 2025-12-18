import { Router } from "express";
import { controllerMethods } from "./UserController";
import authMiddleware from "../middlewares/auth-Middleware";

const router = Router();

router.post("/register", controllerMethods.registation);
router.post("/login", controllerMethods.login);
router.get("/me", authMiddleware, controllerMethods.me);
router.post("/address", authMiddleware, controllerMethods.addAddress);
router.get("/get-addresses", authMiddleware, controllerMethods.getAddresses);
router.patch("/update-address/:id", authMiddleware, controllerMethods.updateAddress);
router.delete("/remove-address/:id", authMiddleware, controllerMethods.removeAddress);
router.patch("/update", authMiddleware, controllerMethods.updateMe);
router.delete("/delete", authMiddleware, controllerMethods.deleteAccount);

export default router;