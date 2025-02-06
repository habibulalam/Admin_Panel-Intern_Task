import { createContext, useState, useContext, useEffect } from 'react';

// Create the ProductsContext
const ProductsContext = createContext();

// Create a custom hook to use the ProductsContext
export const useProducts = () => useContext(ProductsContext);

// Define the ProductsProvider component
export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const normalizeKeys = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;

    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = key.toLowerCase().replace(/\s+/g, ''); // Convert keys to lowercase and remove spaces
        const value = obj[key];
        newObj[newKey] = typeof value === 'object' && value !== null ? normalizeKeys(value) : value;
      }
    }
    return newObj;
  };

  useEffect(() => {
    setIsLoading(true);

    fetch('https://api.restful-api.dev/objects')
      .then(res => res.json())
      .then(data => {
        const normalizedData = data.map(product => normalizeKeys(product));
        setProducts(normalizedData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  const addProduct = (newProduct) => {
    const normalizedProduct = normalizeKeys(newProduct);
    setProducts([...products, normalizedProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    alert('Product removed')
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, deleteProduct, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
