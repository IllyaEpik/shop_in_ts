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
        await prisma.user.delete({ where: { id } })
};