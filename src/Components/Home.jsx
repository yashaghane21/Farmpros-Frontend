import React from 'react'
import img from "../assets/yy.png"
import imgp from "../assets/74.jpeg"
import imgq from "../assets/47.jpeg"
import imgr from "../assets/77.png"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <>  <div className='flex flex-col sm:flex-row h-screen   '>



            <div className='w-full sm:w-[43%] px-10 h-[50vh] sm:h-[80vh] sm:mt-[60px] flex flex-col justify-center items-center mt-5  '>
                <h1 className=' font-bold sm:text-5xl  text-black text-3xl cursor-pointer select-none text-left'>Farm Pro</h1>
                <p className='text-md sm:text-xl mt-3 my-2 select-none'>Facilitating seamless auctions for farmers to showcase and sell their products,
                    while providing buyers with a transparent bidding system to access high-quality
                    agricultural goods at competitive prices. With user-friendly controls and a fair marketplace, our platform revolutionizes agricultural trade.
                    .</p>
                    <div className='flex mt-3  '>
                <button className=' rounded-xl px-3 py-1 font-semibold    text-white bg-green-700 cursor-pointer select-none'> Tutorial</button>
                <button className='border-2 rounded-xl px-2  text-white bg-green-700 select-none'> Schemes</button>
                <button className='border-2 rounded-xl px-2  text-white bg-green-700  select-none ' onClick={() => navigate("/Admin")}> Get started</button>

            </div>

            </div>

            <div className='w-full  sm:w-[57%] flex justify-center'>
                <img src={img} alt='j' className='w-[100%] rounded-md sm:h-[80%] sm:w-[100%] h-full' />
            </div>

        </div>
            <div className='flex flex-col mt-9 sm:flex-row justify-center  items-center'>
                <div className='h-[38vh] w-[35vh] sm:w-[40vh] border-2 sm:mx-[70px] shadow-lg rounded-lg my-7 ' >
                    <div>
                        <img src={imgp} alt='dsd' className='h-[25vh] flex justify-center items-center ' />
                        <p className='text-center p-1 font-bold select-none' > All Transactions and marketing are secured</p>
                    </div>
                </div>
                <div className='h-[38vh] w-[35vh] sm:w-[40vh] border-2 sm:mx-[130px]  shadow-md rounded-md my-7' >
                    <div>
                        <img src={imgq} alt='dsd' className='h-[25vh] pl-10 flex justify-center items-center' />
                        <p className='text-center p-1 font-bold select-none '> All sellers on platform are Verified Sellers</p>
                    </div>
                </div>
                <div className='h-[38vh] w-[35vh] sm:w-[40vh] border-2 sm:mx-[77px] rounded-md shadow-md my-7' >
                    <div>
                        <img src={imgr} alt='dsd' className='h-[25vh] flex justify-center items-center' />
                        <p className='text-center p-1 font-bold select-none'> Clean And Hygenic Products</p>
                    </div>
                </div>



            </div>
        </>

    )
}

export default Home
