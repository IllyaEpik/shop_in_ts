import { Router } from "express";
import { orderController } from "./OrderController";

const router = Router();

router.post("/", orderController.create);

export default router;
