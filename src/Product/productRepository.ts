import prisma from "../db/prismaDB";
import { CreateProductInput, CreateProductInputWithCategory, IRepositoryContract, ProductInput } from "./productTypes";

export const productRepository:IRepositoryContract = {
    async create(data) {
        const { categoryId, ...other } = data;
        // try{
            return await prisma.product.create({
                data: {
                    ...other,
                    category: { connect: { id: categoryId } }
                }
            });

        // }catch(error){
        //     return error
        // }
    },
    async countProducts(categoryId){
        const whereFilter = !isNaN(categoryId) ? { categoryId } : {};
        console
        return await prisma.product.count({
            where:whereFilter
        })
    },
    async getAll(isSortByDate,skip,count,categoryId) {
        console.log(skip,count,isSortByDate)
        const whereFilter = !isNaN(categoryId) ? { categoryId } : {};

        return await prisma.product.findMany({
            skip,
            take:count,
            orderBy: isSortByDate ?  {
                createdAt: "asc"
            } : {
                popular: "asc"
            },
            where:whereFilter
        });
    },
    async getSimilar(id){
        const product = await prisma.product.findUnique({ where: { id } })
        if (!product) {
            throw new Error("product is not found")
        }
        return await prisma.product.findMany({
            where: {
                price: {
                    gte: product.price*1.1,
                    lte: product.price*0.1
                }
            }
        });
    },
    async getById(id) {
        return await prisma.product.findUnique({ where: { id } })
    },
    async update(id, data) {
        return await prisma.product.update({
            where: { id },
            data,
        });
    },
    async delete(id: number) {
        return await prisma.product.delete({
            where: { id },
        });
    },
};