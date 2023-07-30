import React, { useState, useEffect } from 'react'
import axios from 'axios';
import img from "./77.png"
import { Select } from 'antd'
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const { Option } = Select
const Orders = () => {
  const [status, setstatus] = useState(["not process", "processing", "shipped", "delivered", "cancel"])
  const navigate=useNavigate();
  const [morders, setmorders] = useState([])
  const id = localStorage.getItem("userid")
  const orders = async () => {

    const { data } = await axios.get("http://localhost:5000/api/v2/orders", {
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

  const update = async (oid, value) => {  //update the order status
    const { data } = await axios.put(`https://farmpros.onrender.com/api/v2/updateo/${oid}`, {
      Status: value
    });
    if (data?.success) {
      console.log("done")
    }
    orders();
  }
  useEffect(() => {
    orders();
  }, [])

  return (
    <div className='flex justify-center sm:justify-start'>
      <div className='grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-2 xl:grid-cols-4 p-5 '>



        {morders?.map((m) => (

          <div key={m._id} className='flex flex-col h-[44vh] w-[35vh] border-2 mx-5 my-5'>
            <img src={m.Product?.image} alt='dd' className='h-[20vh] justify-center rounded-lg p-2' />
            <h1 className='px-2 font-semibold'>{m.Product?.name}</h1>
            <h1 className='px-2 font-semibold'>{m.Product?.currenthighestbid}₹/Kg</h1>
            <h1 className='px-2 font-semibold flex'>Sold To: <button onClick={()=>navigate(`/profile/${m.Buyer?._id}`)} className='flex px-2 font-bold'> <BiUserCircle size={18} className='mt-1' /> {m.Buyer?.name}</button></h1>
            <h1 className='px-2 font-semibold text-green-700'> Status:{m.Status}</h1>
            <Select className=' p-2' onChange={(value) =>
              update(m._id, value)} defaultValue="select status of order">
              {status.map((s, i) => (
                <Option key={i} value={s} >{s}</Option>
              ))}
            </Select>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Orders
