import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
    const { productId } = useParams();
    console.log(productId);

    const [product, setProduct] = useState();
    console.log(product);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);

        fetch(`https://api.restful-api.dev/objects/${productId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const normalizedData = normalizeKeys(data);
                console.log(normalizedData);
                setProduct(normalizedData);
                setLoader(false);
            });
    }, [productId]);

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


    if (loader) {
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>;
    }

    return (
        <div>
            <Link to={'/products'} className="btn mt-3 bg-gray-200 border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white sticky top-0">
                <button className="hover:cursor-pointer"><i className="fa-solid fa-arrow-right-to-bracket fa-rotate-180"></i> Go Back</button>
            </Link>
            <div className="my-5 p-5 border border-base-content/55 bg-base-200 rounded-box">
                <h1 className="text-center text-2xl font-semibold mb-10 bg-custom-primary text-white pt-2 pb-3 rounded-sm">Single Product Info</h1>
                <div className="grid grid-cols-2 gap-4 pl-4">
                    <div className="font-semibold">Product Id:</div>
                    <div>{product.id}</div>
                    <div className="font-semibold">Product Name:</div>
                    <div>{product.name}</div>

                    {/* Conditional display starts */}


                    <div className={`${product.data?.description ? 'block' : 'hidden'} font-semibold`}>Description:</div>
                    <div className={`${product.data?.description ? 'block' : 'hidden'}`}>{product.data?.description || 'Unknown'}</div>



                    <div className={`${product.data?.price ? 'block' : 'hidden'} font-semibold`}>Price:</div>
                    <div className={`${product.data?.price ? 'block' : 'hidden'}`}>{product.data?.price + '$' || 'Unknown'}</div>



                    <div className={`${(product.data?.capacity || product.data?.harddisksize || product.data?.capacitygb) ? 'block' : 'hidden'} font-semibold`}>Capacity:</div>
                    <div className={`${(product.data?.capacity || product.data?.harddisksize || product.data?.capacitygb) ? 'block' : 'hidden'}`}>{product.data?.capacity || product.data?.harddisksize || product.data?.capacitygb || 'Unknown'}</div>



                    <div className={`${product.data?.color ? 'block' : 'hidden'} font-semibold`}>Color:</div>
                    <div className={`${product.data?.color ? 'block' : 'hidden'}`}>{product.data?.color || 'Unknown'}</div>



                    <div className={`${product.data?.generation ? 'block' : 'hidden'} font-semibold`}>Generation:</div>
                    <div className={`${product.data?.generation ? 'block' : 'hidden'}`}>{product.data?.generation || 'Unknown'}</div>



                    <div className={`${product.data?.year ? 'block' : 'hidden'} font-semibold`}>Year:</div>
                    <div className={`${product.data?.year ? 'block' : 'hidden'}`}>{product.data?.year || 'Unknown'}</div>



                    <div className={`${product.data?.cpumodel ? 'block' : 'hidden'} font-semibold`}>Cpu Model:</div>
                    <div className={`${product.data?.cpumodel ? 'block' : 'hidden'}`}>{product.data?.cpumodel || 'Unknown'}</div>



                    <div className={`${product.data?.strapcolour ? 'block' : 'hidden'} font-semibold`}>Strap-Color:</div>
                    <div className={`${product.data?.strapcolour ? 'block' : 'hidden'}`}>{product.data?.strapcolour || 'Unknown'}</div>



                    <div className={`${product.data?.casesize ? 'block' : 'hidden'} font-semibold`}>Case-Size:</div>
                    <div className={`${product.data?.casesize ? 'block' : 'hidden'}`}>{product.data?.casesize || 'Unknown'}</div>



                    <div className={`${product.data?.screensize ? 'block' : 'hidden'} font-semibold`}>Screen-Size:</div>
                    <div className={`${product.data?.screensize ? 'block' : 'hidden'}`}>{product.data?.screensize || 'Unknown'}</div>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
