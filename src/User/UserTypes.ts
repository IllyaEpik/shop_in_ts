import type { Request, Response } from "express";
import { Prisma } from "../generated/prisma/client";

export type UserCreate = Prisma.UserUncheckedCreateInput;
export type UserLogin = Prisma.UserGetPayload<{
    select:{
        password:true,
        email:true
    }
}>;; 
export type UserSecurity = Prisma.UserGetPayload<{
    omit:{
        password:true
    }
}>;
export interface IJWT{
    id:number
}


export interface IControllerContract {
    registation: (
        req:Request<object, string, UserLogin>,
        res:Response<string>
    ) => Promise<void>
    login: (
        req:Request<object, string, UserLogin>,
        res:Response<string>
    ) => Promise<void>
    me: (
        req:Request<object, UserSecurity | string, object>,
        res:Response<string | UserSecurity | string, {userId:number}>
    ) => Promise<void>
    // registation: (req: Request, res: Response) => Promise<void>;
    // login: (req: Request, res: Response) => Promise<void>;
    // me: (req: Request, res: Response) => Promise<void>;
    addAddress: (req: Request, res: Response) => Promise<void>;
    getAddresses: (req: Request, res: Response) => Promise<void>;
    updateAddress: (req: Request, res: Response) => Promise<void>;
    removeAddress: (req: Request, res: Response) => Promise<void>;
    updateMe: (req: Request, res: Response) => Promise<void>;
    deleteAccount: (req: Request, res: Response) => Promise<void>;
}

export interface IRepositoryContract {
    createUser: (user: any) => Promise<any>;
    getUserByEmail: (email: string) => Promise<any>;
    getUserById: (id: number) => Promise<any>;
    createAddress: (userId: number, city: string, street: string) => Promise<any>;
    getAddresses: (userId: number) => Promise<any[]>;
    getAddressById: (id: number) => Promise<any | null>;
    updateAddress: (id: number, city: string, street: string) => Promise<any>;
    deleteAddress: (id: number) => Promise<any>;
    updateUser: (id: number, data: any) => Promise<any>;
    deleteUser: (id: number) => Promise<any>;
}
export interface IServiceContract {
    registation: (user: any) => Promise<string>;
    login: (userData: any) => Promise<string>;
    me: (id: number) => Promise<UserSecurity>;

    addAddress: (userId: number, city: string, street: string) => Promise<string>;
    getAllAddresses: (userId: number) => Promise<string>;
    updateAddress: (userId: number, addressId: number, city: string, street: string) => Promise<string>;
    removeAddress: (userId: number, addressId: number) => Promise<string>;
    updateMe: (userId: number, data: any) => Promise<string>;
    deleteMe: (userId: number) => Promise<string>;
}