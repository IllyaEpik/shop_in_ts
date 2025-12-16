export interface CreateOrderItemInput {
  productId: number;
  quantity: number;
}

export interface CreateOrderInput {
  userId: number;
  shippingAddress: string;
  paymentMethod: string;

  items: CreateOrderItemInput[];
}
