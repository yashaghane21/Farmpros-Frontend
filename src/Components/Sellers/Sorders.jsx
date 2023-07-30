import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
  const [morders, setmorders] = useState([])
  const id = localStorage.getItem("userid")
  const navigate=useNavigate()
  const orders = async () => {
    const { data } = await axios.get("https://farmpros.onrender.com/api/v1/orders", {
      params: { id: id }
    });
    if (data?.success) {
      setmorders(data.orders)
      console.log(data)
    }
    else {
      alert("something went wrong")
    }
  }
  useEffect(() => {
    orders();
  }, [])
  return (
    <div className='flex justify-center sm:justify-start'>
      <div className='grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-2 xl:grid-cols-4 p-5 '>

        {morders?.map((m) => (

          <div key={m._id} className='flex flex-col h-[40vh] w-[40vh] sm:w-[37vh] border-2 mx-5 my-5'>
            <img src={m.Product?.image} alt='dd' className='h-[20vh] justify-center rounded-lg p-2' />
            <h1 className='px-2 font-semibold'>{m.Product?.name}</h1>
            <h1 className='px-2 font-semibold'>{m.Product?.currenthighestbid}₹/Kg</h1>
            <h1 onClick={()=>navigate(`/profile/${m.seller?._id}`)} className='px-2 font-semibold flex'>Selling By: <button className='flex px-2 font-bold'> <BiUserCircle size={18} className='mt-1' /> {m.seller?.name}</button></h1>
            <h1 className='px-2 font-semibold text-green-700'> Status:{m.Status}</h1>


          </div>

        ))}

      </div>
    </div>
  )
}

export default Orders
