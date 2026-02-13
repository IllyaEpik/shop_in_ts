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

export type CreateProductInput = Prisma.ProductCreateInput
export type CreateProductInputWithCategory = CreateProductInput & {
  	categoryId:number
}
export type Product= Prisma.ProductGetPayload<{
	include:{

	}
}>
export interface ProductWithCount {
    count:number | undefined,
    products:Product[]
} 
export interface IRepositoryContract {
    create: (data: CreateProductInputWithCategory) => Promise<Product>;
    getAll: (isSortByDate:boolean,skip:number,count:number,categoryId:number) => Promise<Product[]>;
    countProducts: (categoryId:number) => Promise<number>
    getById: (id: number) => Promise<Product | null>;
    update: (id: number, data: Partial<ProductInput>) => Promise<Product>;
    delete: (id: number) => Promise<Product>;
    getSimilar: (id:number) => Promise<Product[] | string>;
}

export interface IServiceContract {
    create: (data: CreateProductInputWithCategory) => Promise<Product>;
    getAll: (isSortByDate:boolean,skip:number,count:number,categoryId:number) => Promise<Product[]>;
    countProducts: (categoryId:number) => Promise<number>
    getById: (id: number) => Promise<Product | null>;
    update: (id: number, data: Partial<ProductInput>) => Promise<Product>;
    delete: (id: number) => Promise<Product>;
    getSimilar: (id:number) => Promise<Product[] | string>;
}