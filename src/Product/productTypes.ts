import type{ Request, Response } from "express";
import { Prisma } from "../generated/prisma/client"

export interface ProductInput {
    name: string;
    description: string;
    price: number;
    discount: number;
    quantityLimit: number;
    categoryId: number;
    userId: number;
}