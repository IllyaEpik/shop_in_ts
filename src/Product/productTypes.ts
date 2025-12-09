import type{ Request, Response } from "express";


// export interface IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
// }

// export interface IProduct {
//     price: int;
//     discount: number;
//     description: string;
//     name: string;
//     quantityLimit: int; 
// }
export interface ProductInput {
    name: string;
    description: string;
    price: number;
    discount: number;
    quantityLimit: number;
}
