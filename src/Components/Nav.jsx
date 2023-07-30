import React, { useState } from 'react'
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"
import {useAuth } from "./Auth/Authcontext"
import { Link, useNavigate } from "react-router-dom"
import { BiUserCircle } from 'react-icons/bi';
import {GiFarmer} from "react-icons/gi"
export default function Nav() {
    const [nav, setnav] = useState(false);
    const [auth,setauth]=useAuth();
    const navigate=useNavigate()
    const handle = () => {
        setnav(!nav)
    }
    return (
        <div className=''>
            <div className=' flex justify-between items-center p-4 shadow-lg'>
                <section >
                    <h1 onClick={()=>navigate("/")} className=' mx-2 font-bold text-lg text-green-700 cursor-pointer flex'>
                        <GiFarmer size={33}/>
                        FARMPRO
                    </h1>
                </section>
                <section onClick={handle} className='sm:hidden'>
                    {nav ? <GiCancel size={23} /> : <GiHamburgerMenu size={23} />}

                </section>

           <ul className='hidden md:flex items-center cursor-pointer'>
            <li className='mx-2 font-bold  ' onClick={()=>navigate("/")}>Home</li>
            <li className='mx-2 font-bold '>Contact</li>
            <li className='mx-2 font-bold'>About</li>
            {!auth?.user ? (
                   <>
                   <div className='flex items-center font-bold'>
                <button className='mx-2 bg-green-700 rounded-md px-2 text-white' onClick={()=>navigate("/login")}> Login</button>
                <button className='mx-2 bg-green-700 rounded-md px-2 text-white' onClick={()=>navigate("/signup")}>Signup</button>
                   </div>
                   </>
                ) : (
                    <>
                        {auth?.user?.role === 1 ? (
                            <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/Admin')} >
                                <li className='mx-2 font-bold mt-2 items-center' >Farmer</li>
                                <li className=' ml-0' >
                                    <BiUserCircle size={40} className='text-green-700'/>
                                </li>
                                
                            </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row">
                                    <Link className='mx-2 font-bold mt-2' to='/user' >{auth?.user?.username}</Link>
                                    <li className=" cursor-pointer" >
                                        <BiUserCircle size={40} className="text-green-700" onClick={()=> navigate('/user')}  />
                                    </li>

                                    
                                </div>
                            </>
                        )}
                    </>
                )}
           </ul>


            </div>

            <section className='sm:flex md:hidden '>
                <ul className={ ` bg-gray-300 flex flex-col  absolute left-0 h-screen shadow-sm ${nav ? 'w-[50%] sm:w-17 ' : "w-0 overflow-hidden"} transition-all ease-linear duration-300 `}>
                    <li className='mx-2 my-1 font-semibold hover:border-b-2 border-black inline ' onClick={()=>navigate("/")}>Home</li>
                    <li className='mx-2  my-1 font-semibold hover:border-b-2 border-black inline '>Contact</li>
                    <li className='mx-2 my-1 font-semibold hover:border-b-2 border-black inline'>About</li>
                    {!auth?.user ? (
                        <>
                        <div className='flex font-bold mt-1'>
                <button className='mx-2 bg-green-700 rounded-md px-2 text-white' onClick={()=>navigate("/login")}> Login</button>
                <button className='mx-2 bg-green-700 rounded-md px-2 text-white' onClick={()=>navigate("/signup")}>Signup</button>
                   </div>
                        </>
                ) : (
                    <>
                        {auth?.user?.role === 1 ? (
                            <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/Admin')} >
                                <li className='mx-2 font-semibold hover:border-b-2 border-black inline' >Farmer</li>
                                <li className=' ml-0' >
                                    <BiUserCircle size={40}  />
                                </li>
                                
                            </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row">
                                    <Link className='mx-2 font-bold' to='/user' >{auth?.user?.username}</Link>
                                    <li className=" cursor-pointer" >
                                        <BiUserCircle onClick={()=> navigate('/user')} size={40} />
                                    </li>

                                    
                                </div>
                            </>
                        )}
                    </>
                )}

                </ul>


            </section>


        </div>
    )
}
