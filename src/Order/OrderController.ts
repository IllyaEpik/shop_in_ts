import { Request, Response } from "express";
import { orderService } from "./OrderService";
import { IControllerContract } from "./OrderTypes";

export const orderController:IControllerContract = {
    create: async (req, res) =>{
		try {
			const products = req.body
			const order = await orderService.create(products);
			res.status(201).json(order);
		} catch (error: any) {
			res.status(400).json( 
				error.message || "Order creation failed",
			);
		}
    },
};
