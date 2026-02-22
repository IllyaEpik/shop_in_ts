import type { Request, Response } from "express";
import { Prisma, Token } from "../generated/prisma/client";

export type UserCreate = Prisma.UserUncheckedCreateInput;
export type UserLogin = Prisma.UserGetPayload<{
    select:{
        password:true,
        email:true
    }
}>;
export type IUser = Prisma.UserGetPayload<{}>;
export type UserSecurity = Prisma.UserGetPayload<{
    omit:{
        password:true
    }
}>;
export interface IResetPassword {
    email:string
}
export interface IConfirmResetPassword {
    token:string
}
export type IToken = Prisma.TokenGetPayload<{
    include:{
        user:true
    }
}>
export interface IJWT{
    id:number
}
// id: number;
//     createdAt: Date;
//     userId: number;
//     confirmationToken: number;
//     expiresAt: Date;
export type IAdressCreate = {
    street:string
    city:string
}
// export type IToken = Prisma.TokenGetPayload<{}>
export type IAdress = Prisma.AddressGetPayload<{}>

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
    addAddress: (
        req:Request<object, IAdress | string, IAdressCreate>,
        res:Response<IAdress | string>
    ) => Promise<void>
    getAddresses: (req: Request, res: Response) => Promise<void>;
    updateAddress: (req: Request, res: Response) => Promise<void>;
    removeAddress: (req: Request, res: Response) => Promise<void>;
    updateMe: (req: Request, res: Response) => Promise<void>;
    deleteAccount: (req: Request, res: Response) => Promise<void>;

    resetPassword: (
        req:Request<object, string, IResetPassword>,
        res:Response<string>
    ) => Promise<void>
    confirmResetPassword: (
        req:Request<object, string, IConfirmResetPassword>,
        res:Response<string>
    ) => Promise<void>
}

export interface IRepositoryContract {
    createUser: (user: any) => Promise<any>;
    getUserByEmail: (email: string) => Promise<IUser | null>;
    getUserById: (id: number) => Promise<UserSecurity | null>;
    createAddress: (userId: number, city: string, street: string) => Promise<any>;
    getAddresses: (userId: number) => Promise<any[]>;
    getAddressById: (id: number) => Promise<any | null>;
    updateAddress: (id: number, city: string, street: string) => Promise<any>;
    deleteAddress: (id: number) => Promise<any>;
    updateUser: (id: number, data: any) => Promise<any>;
    deleteUser: (id: number) => Promise<any>;
    createToken: (userId: number,token:number) => Promise<IToken | null>
    deleteToken: (token: number) => Promise<null | IToken>
    getUserByToken: (token: number) => Promise<null | IToken>
    
}
export interface IServiceContract {
    registation: (user: any) => Promise<string>;
    login: (userData: any) => Promise<string>;
    me: (id: number) => Promise<UserSecurity | null>;

    addAddress: (userId: number, city: string, street: string) => Promise<string>;
    getAllAddresses: (userId: number) => Promise<string>;
    updateAddress: (userId: number, addressId: number, city: string, street: string) => Promise<string>;
    removeAddress: (userId: number, addressId: number) => Promise<string>;
    updateMe: (userId: number, data: any) => Promise<string>;
    deleteMe: (userId: number) => Promise<string>;

    resetPassword: (email: string) => Promise<string>;
    confirmResetPassword: (token: number, password:string) => Promise<string>;
    
}