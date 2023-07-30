import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/Ci';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
   
    const navigate=useNavigate();

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get("https://farmpros.onrender.com/api/v1/products");
            const currentp= data.products.filter(product => new Date(product.endtime)> new Date())
            setProducts(currentp);
            console.log(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        if (fetchProducts()) {

        }
    }, []);

    return (
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4'>
                {products.map((product) => (
                    <div key={product._id} className='h-[58vh] sm:h-[52vh] w-[43vh] border-2 shadow-lg sm:mx-4'>
                        <div className='flex justify-center mt-2 shadow-md'>
                            <img src={product.image} alt={product.name} className='h-[20vh] w-[40vh] border-2 rounded-lg' />
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-sm font-semibold px-5 mt-2 hover:underline'>{product.name}</h1>
                            <h1 className='mt-2 px-3 font-semibold'>₹{product.price}/kg</h1>
                        </div>

                        <div className='flex justify-between  '>
                            <p onClick={()=>navigate(`/profile/${product.sellerid?._id}`)} className='text-sm font-semibold px-2 cursor-pointer mt-2'>Selling By : {product.sellerid?.username}</p>

                            <div className='flex mt-2 font-bold'>
                                <CiLocationOn className='mt-1 ' />
                                <h1 className='font-bold px-2'> {product.sellerid?.city}</h1>
                            </div>

                        </div>
                        <p className='m-2  text-sm font-semibold'>{product.description.substring(0, 34)}</p>
                        <h1 className='text-sm font-semibold px-2 mt-2 text-green-700'>Highest Bid : ₹ {product.currenthighestbid}</h1>
                        <h1 className='font-bold text-sm px-2 mt-2'>End time :{product.endtime}</h1>
                        <div className='flex justify-end p-2'> 

                            <button onClick={()=>navigate(`/details/${product._id}`)} className='text-md rounded-md bg-green-700 text-white px-2 mt-2
                        '>View Details</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
