import prisma from "../db/prismaDB"; 
import { ICategory, IRepositoryContract } from './categoryTypes';

export const CategoryRepository:IRepositoryContract ={
    create: async (data) =>{
        return await prisma.category.create({ data });
    },
    findAll: async () => {
        return await prisma.category.findMany({
            orderBy: { name: 'asc' },
        });
    },
    async findById(id) {
        return await prisma.category.findUnique({ where: { id } });
    },
    async findByUrlName(urlName) {
        return await prisma.category.findUnique({ where: { urlName } });
    },

    async update(id, data) {
        return await prisma.category.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return await prisma.category.delete({ where: { id } });
    }
}