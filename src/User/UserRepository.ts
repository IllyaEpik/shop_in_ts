import prisma from "../db/prismaDB";
// import Prisma from "../db/prismaDB";
import { IRepositoryContract } from "./UserTypes";

export const repositoryMethods:IRepositoryContract = {
    getUserByEmail: async (email) => {
        const user = await prisma.user.findUnique({
            where:{email}
        })
        return user
    },
    createUser: async (user) => {
        return await prisma.user.create({data:user})
    },
    getUserById: async (id) => {
        const user = await prisma.user.findUnique({
            where:{
                id
            }
        })
        return user
    }
}
