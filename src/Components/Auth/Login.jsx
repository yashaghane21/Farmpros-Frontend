import { Link, useNavigate } from 'react-router-dom'
import img1 from './login.png'
import { useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { useAuth } from "../Auth/Authcontext"
export default function SignUp() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const Navigate = useNavigate();
    const [auth, setauth] = useAuth();

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("https://farmpros.onrender.com/api/v1/login", {

                email: email,
                password: password,

            });
            if (data.success) {
                toast.success(" login succesfully ", {
                    autoClose: 2000,
                });
                Navigate("/")
                setauth({
                    ...auth,
                    user: data.user,
                    token: data.token
                });
                localStorage.setItem("userid",data?.user._id)
                localStorage.setItem("auth", JSON.stringify(data));
            }
            else {
                toast.error("wrong password or email ", {
                    autoClose: 2000,
                });
            }

        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred:", error.message);
            }
        }


    }
    return (
        <>
            <div className="w-100 mt-0 justify-center pt-16 px-5 bg-gray-200 lg:px-72 md:pb-52 max-md:pb-16" >
                <div className="w-[100%] bg-white flex md:flex-row max-md:flex-col-reverse p-3 max-md:pb-20  shadow-xl rounded-md" >
                    <div className="w-[60%] max-md:w-[100%] h-auto text-center text-2xl font-semibold p-2 " >
                        <h1 className='font underline underline-offset-2 max-md:mt-5' >Login</h1>
                        <div className='mt-7 ' >
                            <form onSubmit={handlesubmit}>

                                <input
                                    type="email"
                                    className="w-[80%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-green-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-4"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email"
                                    required />

                                <input
                                    type="password"
                                    className="w-[80%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-green-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-5"
                                    name="fullname"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder="Password"
                                    required />

                                <p className='text-sm md:mr-20 max-sm:mr-12 sm:mr-16 font-normal mt-4 float-right  ' > <Link className='text-green-600' to='/Forgot '>Forgot Password ?</Link></p>
                                <button className='w-[80%] mt-6 p-2 text-lg bg-green-400 hover:bg-green-300 rounded-lg'>Login</button>

                            </form>


                            <p className='text-sm font-normal mt-12 max-md:mt-8' >Don't have an account ? <Link className='text-blue-600' to='/SignUp '>Create Account</Link></p>
                        </div>

                    </div>
                    <div className="w-[40%] max-md:w-[100%] h-auto "><img src={img1} className='h-96 w-100 max-md:w-[100%] max-md:h-52 rounded-md' /></div>
                </div>
            </div>

        </>
    )
}