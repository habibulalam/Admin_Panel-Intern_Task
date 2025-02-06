import { useState } from "react";
import { useProducts } from "../Product Context Api/ProductContext";

const AddProduct = () => {
    const { products, addProduct } = useProducts();
    const [formData, setFormData] = useState({
        productId: '',
        name: '',
        price: '',
        color: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { productId, name, price, color } = formData;

        // Validate unique productId
        if (products.some(product => product.id === productId)) {
            alert('Product ID already exist. Please enter a different ID.');
            return;
        }

        // Create new product object
        const newProduct = {
            id: productId,
            name: name,
            data: {
                price: parseFloat(price),
                color: color,
            }
        };

        // Add the new product to the context
        addProduct(newProduct);

        // Clear form fields
        setFormData({
            productId: '',
            name: '',
            price: '',
            color: ''
        });

        alert('Product added successfully!');
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
                <fieldset className="bg-base-200 border border-black p-4 rounded-box">
                    <legend className="text-2xl font-semibold mb-4">Product Details</legend>

                    <label className="block mb-2 font-medium">Product-Id (unique) :</label>
                    <input
                        type="number"
                        name="productId"
                        className="w-full mb-4 p-2 border border-gray-400 rounded text-gray-800"
                        placeholder="Enter product id"
                        value={formData.productId}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-medium">Name :</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full mb-4 p-2 border border-gray-400 rounded text-gray-800"
                        placeholder="Enter product name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-medium">Price :</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full mb-4 p-2 border border-gray-400 rounded text-gray-800"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />

                    <label className="block mb-2 font-medium">Color :</label>
                    <input
                        type="text"
                        name="color"
                        className="w-full mb-4 p-2 border border-gray-400 rounded text-gray-800"
                        placeholder="Enter product color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="w-full p-2 bg-custom-primary text-white rounded hover:bg-custom-primary-dark">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;
