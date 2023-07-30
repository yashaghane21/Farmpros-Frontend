import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import img1 from "./77.png"
import { TimePicker } from 'antd';
import { useAuth } from '../Auth/Authcontext';
const { RangePicker } = TimePicker

export default function Add() {

    const [name, setname] = useState("")
    const [desc, setdesc] = useState("")
    const [img, setimg] = useState("")
    const [price, setprice] = useState("")
    const [endtime, setendtime] = useState("")
    const [auth, setauth] = useAuth();
  
   const id = auth.user?._id;
   console.log(id)
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post("https://farmpros.onrender.com/api/v2/bidd", {

                name: name,
                desc: desc,
                image: img,
                price: price,
                endtime: endtime,
                sellerid:id

            })
            if (data.success) {
                toast.success("product added for bidding")
                 }
            else {
                alert("dfedf")
            }
        } catch ({ error }) {

        }
    }





    return (
        <>
            <div className="w-100 mt-16 justify-center max-xl:px-2 xl:px-52 md:pb-52 max-md:pb-4">
                <div className="w-[100%] flex md:flex-row max-md:flex-col p-3 bg-white shadow-xl rounded-md">
                    <div className="w-[40%] max-md:w-[100%] h-[200px] bg-slate-200">
                        <img src={img1} className="md:h-[100%] w-100 max-md:w-[100%] max-md:h-[100%] rounded-md" alt="Add Posts" />
                    </div>
                    <div className="w-[60%] max-md:w-[100%] max-md:h-[70%] max-md:pb-16 md:h-auto text-center text-2xl font-semibold p-10 max-md:p-5 bg-white">
                        <h1 className="font underline underline-offset-2"> Add Product</h1>
                        <div className="mt-10 text-xl justify-center font-normal">


                            <form onSubmit={handlesubmit} >
                                <input
                                    type="text"
                                    className="w-[100%] max-md:w-[90%] border-b-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="Name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="w-[100%] max-md:w-[90%] border-b-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="desc"
                                    placeholder="Desc"
                                    value={desc}
                                    onChange={(e) => setdesc(e.target.value)}

                                />
                                <input
                                    type="text"
                                    className="w-[100%] max-md:w-[90%] border-b-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="Image url"
                                    placeholder="img "
                                    value={img}
                                    onChange={(e) => setimg(e.target.value)}

                                />
                                <input
                                    type="text"
                                    className="w-[100%] max-md:w-[90%] border-b-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="Image url"
                                    placeholder="price"
                                    value={price}
                                    onChange={(e) => setprice(e.target.value)}

                                /> 
                                  <input
                                    type="file"
                                    className="w-[100%] max-md:w-[90%] border-b-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="Image url"
                                    placeholder="price"
                                   

                                /> <TimePicker 

                                     className='className="w-[100%] max-md:w-[100%] border-b-2 mt-2 border-green-400 text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"'
                                onChange={(value) => setendtime(value)}
                                 value={endtime} />

                                <button className="w-[100%] max-md:w-[90%] mt-12 p-2 text-lg bg-green-400 hover:bg-green-300 rounded-lg">Upload</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
