import type{ Request, Response } from "express";
// import Prisma from "../db/prisma";
// import { PrismaClient,Prisma } from "../generated/prisma/client";
// import {  } from "../generated/prisma/client";
// import { Prisma } from "../generated/prisma/browser";
// Prisma
PrismaClient
Prisma.UserGetPayLoad
export interface IControllerContract {
    registation: (
        req:Request<object, UserSecurity | string, UserCreate>,
        res:Response<string | UserSecurity | null>
    ) => Promise<void>
    login: (
        req:Request<object, UserSecurity | string, UserLogin>,
        res:Response<string | UserSecurity | null>
    ) => Promise<void>
    me: (
        req:Request<object, UserSecurity | string, object>,
        res:Response<string | UserSecurity | null, {userId:number}>
    ) => Promise<void>
    checkAndSend: (
        data:string | UserSecurity | null,
        res:Response<string | UserSecurity | null>,
        
    ) => Promise<void>
}

export interface IRepositoryContract {
    createUser: (user:UserCreate) => Promise<UserSecurityWithId | null>
    getUser: (email:string) => Promise<IUser | null>
    getUserById: (id:number)=> Promise<UserSecurityWithId | null>
    
}
export interface IServiceContract {
    registation: (user:UserCreate) => Promise<string>
    login: (userData:UserLogin) => Promise<string>
    me: (id:number) => Promise<UserSecurity | null | string>
}