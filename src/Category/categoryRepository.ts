import prisma from "../db/prismaDB"; 
import { ICategory, ICategoryInput } from './categoryTypes';

export class CategoryRepository {
    async create(data: ICategoryInput): Promise<ICategory> {
        return prisma.category.create({ data });
    }
    async findAll(): Promise<ICategory[]> {
        return prisma.category.findMany({
            orderBy: { name: 'asc' },
        });
    }
    async findById(id: number): Promise<ICategory | null> {
        return prisma.category.findUnique({ where: { id } });
    }
    async findByUrlName(urlName: string): Promise<ICategory | null> {
        return prisma.category.findUnique({ where: { urlName } });
    }

    async update(id: number, data: ICategoryInput): Promise<ICategory> {
        return prisma.category.update({
            where: { id },
            data,
        });
    }
    async delete(id: number): Promise<ICategory> {
        return prisma.category.delete({ where: { id } });
    }
}