import { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

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
  
    const fetchData = async () => {
      try {
        // Attempt to fetch data from the primary API
        const response = await fetch('https://api.restful-api.dev/objects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const normalizedData = data.map(product => normalizeKeys(product));
        setProducts(normalizedData);
      } catch (error) {
        console.error('Error fetching products from API, using backup data:', error);
        try {
          // Fetch data from backup JSON file if primary API request fails
          const backupResponse = await fetch('/backup-api-data.json');
          if (!backupResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const backupData = await backupResponse.json();
          const normalizedData = backupData.map(product => normalizeKeys(product));
          setProducts(normalizedData);
        } catch (backupError) {
          console.error('Error fetching backup products:', backupError);
        }
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const addProduct = (newProduct) => {
    const normalizedProduct = normalizeKeys(newProduct);
    setProducts([normalizedProduct , ...products]);

    toast.success(`"${newProduct.name}" added to product list, successfully!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  const deleteProduct = (id, productName) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${productName}"?`);

    if (confirmed) {
      setProducts(products.filter(product => product.id !== id));
      toast.error(`"${productName}" Removed from product list.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return true
    }
    else{
      return false
    }
  };


  return (
    <ProductsContext.Provider value={{ products, addProduct, deleteProduct, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
