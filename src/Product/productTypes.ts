import type{ Request, Response } from "express";
import { Prisma } from "../generated/prisma/client"

export interface ProductInput {
    name: string;
    description: string;
    price: number;
    discount: number;
    quantityLimit: number;
    // categoryId: number;
}
export interface CreateParameterInput {
  key: string;
  value: string;
}

export interface CreateBlockInput {
  title: string;
  description: string;
  demo?: string;
  parameters: CreateParameterInput[];
}

// export interface CreateProductInput {
//   name: string;
//   description: string;
//   price: number;
//   discount: number;
//   quantityLimit: number;

//   images: string[];
//   blocks: CreateBlockInput[];
// }
// type category = Prisma.CategoryCreateNestedOneWithoutProductsInput
export type CreateProductInput = Omit<Prisma.ProductCreateInput, "category">
export type CreateProductInputWithCategory = CreateProductInput & {
  categoryId:number 
    userId: number;
}