import prisma from "../db/prismaDB";
import { CreateProductInput, CreateProductInputWithCategory, IRepositoryContract, ProductInput } from "./productTypes";

export const productRepository:IRepositoryContract = {
    create(data) {
        const { categoryId, ...other } = data;
        // try{
            return prisma.product.create({
                data: {
                    ...other,
                    category: { connect: { id: categoryId } }
                }
            });

        // }catch(error){
        //     return error
        // }
    },
    getAll(isSortByDate:boolean,skip:number,count:number) {
        console.log(skip,count,isSortByDate)
        return prisma.product.findMany({
            skip,
            take:count,
            orderBy: isSortByDate ?  {
                createdAt: "asc"
            } : {
                popular: "asc"
            }
        });
    },
    
    getById(id: number) {
        return prisma.product.findUnique({ where: { id } })
    },
    update(id: number, data: Partial<ProductInput>) {
        return prisma.product.update({
            where: { id },
            data,
        });
    },
    delete(id: number) {
        return prisma.product.delete({
            where: { id },
        });
    },
};