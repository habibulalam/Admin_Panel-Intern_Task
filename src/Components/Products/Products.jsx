import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Product Context Api/ProductContext";

const Products = () => {
  const navigateToDynamicProduct = useNavigate();
  const { products, isLoading } = useProducts();
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");

  const handleSingleProduct = (productId) => {
    navigateToDynamicProduct(`/singleProduct/${productId}`);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleIdChange = (e) => {
    setSearchId(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchId === "" || product.id.toLowerCase().includes(searchId.toLowerCase()))
    );
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
        
      {/* Filter Inputs */}
      <div className="my-4 flex justify-center items-center gap-4">
        <h1 className="font-semibold text-lg">Filters :</h1>
        <input
          type="text"
          placeholder="Filter by Name"
          value={searchName}
          onChange={handleNameChange}
          className="input input-bordered placeholder:text-gray-500"
        />
        <input
          type="text"
          placeholder="Filter by ID"
          value={searchId}
          onChange={handleIdChange}
          className="input input-bordered placeholder:text-gray-500"
        />
      </div>

      {/* Container */}
      <div className="my-5">
        <div className="overflow-x-auto md:overflow-x-hidden rounded-box border border-base-content/55 bg-base-200">
          <h1 className="text-center text-2xl font-semibold mb-3 bg-custom-primary text-white pt-2 pb-3 rounded-sm rounded-b-none">
            Products List
          </h1>
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
              {filteredProducts.map((product, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => handleSingleProduct(product.id)}
                    className="hover:bg-gray-200 hover:cursor-pointer hover:scale-x-[1.02] transition duration-500"
                  >
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td className={`${product.data?.price ? '' : 'text-red-500'}`}>{product.data?.price ? product.data.price + ' $' : 'Unknown'}</td>
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
