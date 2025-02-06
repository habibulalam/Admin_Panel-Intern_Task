
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Product Context Api/ProductContext";

const Products = () => {

    const navigateToDynamicProduct = useNavigate();

    // calling the custom hook
    const { products, isLoading } = useProducts();
    console.log(products);


    const handleSingleProduct = (productId) => {
        navigateToDynamicProduct(`/singleProduct/${productId}`)
    }

    if (isLoading) {
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>;
    }

    return (
        <div>
            {/* Container */}
            <div className="my-5">
                <div className="overflow-x-auto md:overflow-x-hidden rounded-box border border-base-content/55 bg-base-200">
                    <h1 className="text-center text-2xl font-semibold mb-3 bg-custom-primary text-white pt-2 pb-3 rounded-sm rounded-b-none">Products List</h1>
                    <table className="table">
                        {/* head */}
                        <thead className="border-b border-base-content/55">
                            <tr className="border-b-2 text-gray-800">
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row starts */}
                            {products?.map((product, index) => {
                                return (
                                    <tr key={index} onClick={() => handleSingleProduct(product.id)} className="hover:bg-gray-200 hover:cursor-pointer hover:scale-x-[1.02] transition duration-500">
                                        <th>{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td className={`${product.data?.price ? '' : 'text-red-500'}`}>{product.data?.price ? product.data.price+' $': 'Unknown'}</td>
                                        <td className={`${product.data?.color ? 'text-black' : 'text-red-500'}`}>{product.data?.color ? product.data.color : 'Unknown'}</td>
                                        <td>...View More</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;
