import {Prisma } from "../generated/prisma/client";
import type { Request,Response } from "express";
export interface CreateOrderItemInput {
  productId: number;
  quantity: number;
}
export type OrderCreateInput = Prisma.OrderCreateInput
export type Order = Prisma.OrderGetPayload<{
    
}>
export interface CreateOrderInput {
	userId: number;
	shippingAddress: string;
	paymentMethod: string;

	items: CreateOrderItemInput[];
}
export interface OrderData{
	count: number
	id: number
}

export interface IControllerContract {
    create: (
        req:Request<object, Order | string, OrderData[]>,
        res:Response<Order | null>
    ) => Promise<void>
  } 
export interface IServiceContract {
    create: (data:OrderData[]) => Promise<Order>
  } 
export interface IRepositoryContract {
	create: (data:OrderData[]) => Promise<Order>
} 