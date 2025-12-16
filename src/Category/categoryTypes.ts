export interface ICategory {
    id: number;
    name: string;
    urlName: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICategoryInput {
    name: string;
    urlName: string; 
    imageUrl?: string;
}