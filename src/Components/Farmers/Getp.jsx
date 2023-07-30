import React, { useState, useEffect } from 'react';
import { useAuth } from '../Auth/Authcontext';
import axios from 'axios';
import { toast } from "react-toastify"
import { CiLocationOn } from 'react-icons/ci';
import { Select } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
const { Option } = Select;

const Getp = () => {
  const id = localStorage.getItem("userid");
  const [myproducts, setMyProducts] = useState([]);
  const navigate = useNavigate()
  const handleSellButtonClick = async (productId, bidUserId) => {
    try {
      console.log("pid", productId);
      console.log("bid", bidUserId);
      const { data } = await axios.post("http://localhost:5000/api/v2/order", {
        Product: productId,
        Buyer: bidUserId,
        seller: id,
      });
      console.log("API response:", data);
      if (data.success) {
        toast.success("Order placed successfully");
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error("Error placing order");
    }
  };

  const fetchMyProduct = async () => {
    try {
      const { data } = await axios.get("https://farmpros.onrender.com/api/v2/getp", {
        params: { id: id },
      });
      setMyProducts(data.myp);
      console.log(data);
      if (data?.success) {
        console.log('done');
      } else {
        alert('Error fetching products');
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching products');
    }
  };

  useEffect(() => {
    fetchMyProduct();
  }, [id]);

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-2 xl:grid-cols-4 '>
          {myproducts.map((product) => (
            <div key={product._id} className='h-[58vh] sm:h-[54vh] w-[43vh] sm:w-[30vh] md:w-[43vh] border-2 my-2 shadow-lg sm:mx-2 '>
              <div className='flex justify-center mt-2 '>
                <img src={product.image} alt={product.name} className='h-[20vh] w-[40vh] border-2 rounded-lg' />
              </div>
              <div className='flex justify-between'>
                <h1 className='text-md font-semibold px-5 mt-2 hover:underline'>{product.name}</h1>
                <h1 className='mt-2 px-3 font-semibold'>₹{product.price}/kg</h1>
              </div>

              <div className='flex justify-between  '>
                <p onClick={() => navigate(`/profile/${product.sellerid?._id}`)} className=' cursor-pointer text-sm font-semibold px-2 mt-2'>Selling By: {product.sellerid?.username}</p>

                <div className='flex mt-2 font-bold'>
                  <CiLocationOn className='mt-1.5  ' />
                  <h1 className='font-bold text-sm px-2'> {product.sellerid?.city}</h1>
                </div>
              </div>

              <p className='m-2 font-semibold text-sm'>{product.description.substring(0, 34)}</p>
              <h1 className='text-sm font-semibold px-2 mt-2 text-green-700'>Highest Bid: ₹{product.currenthighestbid}</h1>
              <h1 className='font-bold text-sm px-2 mt-2'>End time :{product.endtime}</h1>
              <Select
                id='role'
                className='w-[100%]  text-black focus:outline-none focus:border-green-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3'
              >
                <Option value=''>View Bids</Option>
                {product.bids.map((bid) => (
                  <Option value={bid._id} key={bid._id} className='font-bold'>
                    Buyer: <h1 onClick={()=>navigate(`/profile/${bid.user?._id}`)} className='flex font-semibold '>{bid.user?.name}</h1>  Amount-₹ {bid?.bidamount}
                    <button onClick={() => handleSellButtonClick(product._id, bid.user?._id || '0')} className='bg-red-500 text-white rounded-md px-3 absolute right-2'>
                      Sell
                    </button>
                  </Option>

                ))}
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Getp;
