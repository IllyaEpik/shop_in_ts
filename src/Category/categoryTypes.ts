import type { Request, Response } from "express";
// import { Prisma } from "@prisma/client";
import { Prisma } from "../generated/prisma/client";
export interface ICategory {
    id: number;
    name: string;
    urlName: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

// export interface ICategoryInput {
//     name: string;
//     urlName?: string; 
//     // imageUrl: string;
// }

export type CategoryCreateInput = Prisma.CategoryCreateInput
export type Category = Prisma.CategoryGetPayload<{
    
}>

export interface IControllerContract {
    create: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response<Category | null>
    ) => Promise<void>
    findAll: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response<Category | null>
    ) => Promise<void>
    findById: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response<Category | null>
    ) => Promise<void>
    findByUrlName: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response<Category | null>
    ) => Promise<void>
    update: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response<Category | null>
    ) => Promise<void>
    delete: (
        req:Request<object, Category | string, CategoryCreateInput>,
        res:Response< Category | null>
    ) => Promise<void>
}

export interface IRepositoryContract {
    create: (data:CategoryCreateInput) => Promise<Category>
    findAll: () => Promise<Category[]>
    findById: (id:number) => Promise<Category | null>
    findByUrlName: (urlName:string) => Promise<Category | null>
    update: (id: number, data: CategoryCreateInput) => Promise<Category | null>
    delete: (id:number) => Promise<Category | null>
}

export interface IServiceContract {
    createCategory: (data:CategoryCreateInput) => Promise<CategoryCreateInput>
    getAllCategories: () => Promise<CategoryCreateInput[]>
    getCategoryById: (id:number) => Promise<CategoryCreateInput | null>
    updateCategory: (id:number,data:CategoryCreateInput) => Promise<Category | null>
    deleteCategory: (id:number) => Promise<Category | null>
}