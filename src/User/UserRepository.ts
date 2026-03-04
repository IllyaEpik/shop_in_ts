import prisma from "../db/prismaDB";
import { IRepositoryContract } from "./UserTypes";

export const repositoryMethods: IRepositoryContract = {
    getUserByEmail: async (email) => await prisma.user.findUnique({ where: { email } }),
    createUser: async (user) => await prisma.user.create({ data: user }),
    getUserById: async (id) => await prisma.user.findUnique({ 
        where: { id }, 
        include: { addresses: true } 
    }),
    
    createAddress: async (userId, city, street) => 
        await prisma.address.create({ data: { userId, city, street } }),
        
    getAddresses: async (userId) => 
        await prisma.address.findMany({ where: { userId } }),
    getAddressById: async (id) => 
        await prisma.address.findUnique({ where: { id } }),
        
    updateAddress: async (id, city, street) => 
        await prisma.address.update({ where: { id }, data: { city, street } }),
        
    deleteAddress: async (id) => 
        await prisma.address.delete({ where: { id } }),
        
    updateUser: async (id, data) => 
        await prisma.user.update({ where: { id }, data }),       
    deleteUser: async (id) => 
        await prisma.user.delete({ where: { id } }),
    createToken: async (userId,token) => {
        const expiresAt = new Date()
        expiresAt.setMinutes(expiresAt.getMinutes() + 60);
        
        return await prisma.token.create({ 
            data: { 
                confirmationToken: token, 
                expiresAt, 
                userId
            },
            include:{
                user:true
            }
        })
    },
    deleteTokenByToken: async (token) => {
        
        return await prisma.token.delete({
            where: {
                confirmationToken: token
            },
            include: {
                user: true
            }
        })
    },
    deleteTokenByUserId: async (id) => {
        
        return await prisma.token.delete({
            where: {
                userId: id
            },
            include: {
                user: true
            }
        })
    },
    getUserByToken: async (token) => {
        
        return await prisma.token.findUnique({
            where: {
                confirmationToken: token
            },
            include: {
                user: true
            }
        })
    },
    changePassword: async (id,password) => {
        if (!id) return null
        return await prisma.user.update({
            where: {
                id
            },
            data:{
                password
            }
        })
    }
}