import React, { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { Product } from "../../types/Types";

const ProductManager = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editing, setEditing] = useState<Product | null>(null);
    const saveProduct = (data: Product) => {
        if (editing) {
            setProducts(products.map(p => p.id === data.id ? data : p));
            setEditing(null);
        } else {
            setProducts([...products, data]);
        }
    };

    const deleteProduct = (id: string) => {
        if (window.confirm("Delete?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };
    return (
        <div>
            <ProductForm
                onSave={saveProduct}
                productToEdit={editing}
                cancelEdit={() => setEditing(null)}
            />
            {products.length === 0 ? (
                <p>No products</p>
            ) : (
                products.map(p => (
                    <div key={p.id}>
                        <p>{p.name} - {p.price}</p>
                        <button onClick={() => setEditing(p)}>Edit</button>
                        <button onClick={() => deleteProduct(p.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};
export default ProductManager;
