import React, { useEffect, useState } from "react";
import { Product } from "../../types/Types";



interface ProductFormProps {
    onSave: (product: Product) => void;
    productToEdit: Product | null;
    cancelEdit: () => void;
}
const ProductForm = ({ onSave, productToEdit, cancelEdit }: ProductFormProps) => {
    const [data, setData] = useState({ name: "", description: "", price: 0 });

    useEffect(() => {
        if (productToEdit) {
            setData({
                name: productToEdit.name,
                description: productToEdit.description,
                price: productToEdit.price
            });
        } else {
            setData({ name: "", description: "", price: 0 });
        }
    }, [productToEdit]);
    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.name === "price" ? Number(e.target.value) : e.target.value
        });
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const product: Product = {
            id: productToEdit ? productToEdit.id : Date.now().toString(),
            name: data.name,
            description: data.description,
            price: data.price
        };
        onSave(product);
        setData({ name: "", description: "", price: 0 });
    };
    return (
        <form onSubmit={submit}>
            <input name="name" value={data.name} onChange={change} placeholder="Name" required />
            <textarea
                name="description"
                value={data.description}
                onChange={change}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="price"
                value={data.price}
                onChange={change}
                step="0.01"
                required
            />
            <button type="submit">
                {productToEdit ? "Save" : "Add"}
            </button>

            {productToEdit && (
                <button type="button" onClick={cancelEdit}>Cancel</button>
            )}
        </form>
    );
};
export default ProductForm;
