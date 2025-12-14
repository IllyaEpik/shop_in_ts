


// export interface IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
// }

// export interface IProduct {
//     price: int;
//     discount: number;
//     description: string;
//     name: string;
//     quantityLimit: int; 
// }
export interface CreateParameterInput {
  key: string;
  value: string;
}

export interface CreateBlockInput {
  title: string;
  description: string;
  demo?: string;
  parameters: CreateParameterInput[];
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  discount: number;
  quantityLimit: number;

  images: string[];
  blocks: CreateBlockInput[];
}
