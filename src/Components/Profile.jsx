import React, { useEffect, useState } from 'react'
import img from './user.png'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const Profile = () => {
   const [user,setuser]=useState([])
    const pid =useParams();
    console.log(pid)
    const getdata=async()=>{
       const {data}= await axios.get(`https://farmpros.onrender.com/api/v2/profile/${pid.id}`);
        console.log(data)
        setuser(data)
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <div className=" flex justify-center items-center w-screen ">
            <div className='flex justify-center items-center '>
                <div className='p-5 w-[90%]  '>

                    <h1 className='font-semibold text-lg text-center pb-2'>{user.user?.name} Account</h1>
                    <hr className='w-[100%] mt-1'></hr>
                    <div className='h-[30vh] sm:bg-white w-[90%] sm:w-[80%]'>

                        <h1 className='mt-5 text-center sm:text-left font-semibold'>Profile Photo</h1>
                        <div className='flex justify-center sm:justify-start'>
                            <img src={img} alt='dd' className='h-[14vh] mt-9 ' />

                        </div>


                    </div>
                    <hr className='w-screen  mt-1'></hr>
                    <div className='h-[12vh]'>
                        <h1 className='mt-2 font-semibold pl-2 sm:text-md'>Name</h1>
                        <h1 className='mt-2 mb-2 text-sm pl-2 '>{user.user?.name}</h1>

                    </div>

                    <hr></hr>
                    <div className='h-[12vh]'>
                        <h1 className='mt-2 font-semibold pl-2'>Email address</h1>
                        <h1 className='mt-2 mb-2 text-sm pl-2'>{user.user?.email}</h1>
                    </div>

                    <hr></hr>
                    <div className='h-[12vh]'> 
                    <h1 className='mt-2 font-semibold pl-2'>Mobile Number</h1>
                    <h1 className='mt-2 mb-2 text-sm pl-2'>{user.user?.phone}</h1>
                    </div>
                
                    <hr></hr>
                    <div className='h-[12vh]'> 
                    <h1 className='mt-2 font-semibold pl-2'>City</h1>
                    <h1 className='mt-2 mb-2 text-sm pl-2'>{user.user?.city}</h1>
                    </div>
                    <hr></hr>
                    
                    <hr></hr>
                </div>
            </div>

        </div>
    )
}

export default Profile
