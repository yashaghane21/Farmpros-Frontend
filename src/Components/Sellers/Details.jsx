import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg"
import { VscVerifiedFilled } from "react-icons/vsc"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import axios from 'axios';
const Details = () => {
    const sid = useParams();
    const [products, setProducts] = useState("")
    const navigate = useNavigate();
    const [bidamount, setbidamount] = useState("")
    const id = localStorage.getItem("userid")
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://farmpros.onrender.com/api/v1/product/${sid.id}`);
            setProducts(response.data.product);
            console.log(response)
        } catch (error) {
            console.error('Error fetching product:', error);
            if (error.response && error.response.status === 400) {
                navigate("/products")
                toast.error('Bidding has closed for this product.');

            } else {
                toast.error('An error occurred while fetching the product.');
            }
        }
    };

    const addbid = async (pid) => {
        console.log(id)
        try {
            const { data } = await axios.post("https://farmpros.onrender.com/api/v1/addbidd", {
                product: pid,
                bidamount: bidamount,
                user:id

            })
           

            if (data?.success) {

                toast.success(`bid of amount ${bidamount}  added succesfully`, {

                })
                fetchProduct();
            }

        } catch (error) {
            console.error("Error fetching products:", error);
            if (error.response && error.response.status === 400) {
                toast.error("biding price should grater than base price");
            } else {
                toast.error("An error occurred while fetching products.");
            }
        }


    }
    useEffect(() => {
        fetchProduct();
    }, [sid]);


    return (
        <div>

            <div className='flex flex-col sm:flex-row mt-5 '>
                <div className='w-[100%] sm:w-[50%]  flex justify-center'>
                    <img src={products.image} alt='ewrew' className='w-[50%] h-[50%] sm:w-full sm:h-[80%]' />
                </div>
                <div className='w-full  sm:w-[50%] mt-9'>
                    <h1 className=' mx-5 sm:text-5xl font-bold flex'>{products.name} <VscVerifiedFilled size={30} className='text-blue-700 sm:mt-4 mx-2' /></h1>
                    <p className='my-2 w-[90%] px-5  '>{products.description}.</p>
                    <div className='flex '>
                        <h1 className='p-5 font-bold '>{products.price}₹ /kg</h1>
                        <CiLocationOn size={23} className='mt-6 text-green-700  ' />
                        <h1 className='p-1 mt-4 font-bold'>{products.sellerid?.city}</h1>
                    </div>
                    <h1 className='p-2 mx-3 font-bold text-green-700'>Highest Bid: ₹ {products.currenthighestbid}</h1>
                    <h1 className='p-2 mx-3 font-bold text-red-400'>End Time:{products.endtime}</h1>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row '>


            </div>

            <h1 className='text-center font-bold  mt-2 '>SELLER INFORMATION.</h1>
            <div className='h-[20vh] mt-5'>
                <div className='py-1 sm:p-1 mt-0 flex justify-center'>

                    <table className='border-collapse w-[90%] sm:w-[90%]  '>
                        <thead>
                            <tr className='bg-green-700 text-white'>
                                <th className='p-1 py-1 text-left text-lg'>Seller</th>
                                <th className='p-1 py-1 text-left text-lg'>City</th>
                                <th className='p-1 py-1 text-left text-lg'>Contact No.</th>
                            </tr>

                            <td onClick={()=>navigate(`/profile/${products.sellerid?._id}`)} className='p-3 cursor-pointer py-3 text-left text-lg flex font-semibold'> <CgProfile size={24} className='text-green-700 mt-1.5 mx-1' />{products.sellerid?.name}</td>
                            <td className='p-3 py-3 text-left text-lg font-semibold' >{products.sellerid?.city}</td>
                            <td className='p-3 py-3 text-left text-lg font-semibold'>{products.sellerid?.phone}</td>
                        </thead>



                    </table>

                </div>
            </div>
            <div className='h-[50vh]'>
                <h1 className='text-center mt-5 font-bold'>All Bidders Details</h1>
                <div className='py-1 sm:p-1 mt-5 flex justify-center m'>
                    <table className='border-collapse w-[90%] sm:w-[90%]'>
                        <thead>
                            <tr className="bg-red-700 text-white">
                                <th className='p-1 py-1 text-left text-lg'>Bidder name</th>
                                <th className='p-1 py-1 text-left text-lg'>Amount</th>
                            </tr>
                            {products?.bids?.map((nid) => (
                                <tr key={nid._id}>
                                    <td onClick={()=>navigate(`/profile/${nid.user?._id}`)} className='p-1 cu py-1 text-left text-lg flex font-semibold'>
                                        <CgProfile className='text-green-700 mt-2 mx-1' />
                                        {nid.user?.name}
                                    </td>
                                    <td className='p-1 py-1 text-left text-lg font-semibold'>
                                        ₹ {nid?.bidamount}
                                    </td>
                                </tr>


                            ))}


                        </thead>
                    </table>
                </div>
            </div>

            <div className='h-[40vh]'>
                <h1 className='text-center font-bold '>Add Your Bid</h1>
                <div className=' mt-9 flex justify-center'>
                    <input type="number" className='border-green-400 w-[60%] h-9'
                        value={bidamount}
                        onChange={(e) => setbidamount(e.target.value)}
                        placeholder='Your bid'

                    />

                </div>
                <div className='flex justify-center mt-4'>
                    <button onClick={() => addbid(products._id)} className='rounded-md bg-green-700 px-2 py-2 text-white w-[60%]'>Add</button>
                </div>
            </div>
            <div className='flex justify-center mt-0 '>
                <VscVerifiedFilled size={140} className='text-green-700 opacity-50' />

            </div>
            <h1 className='text-center font-bold mb-5 '>Verified Product </h1>
        </div>

    )
}

export default Details
