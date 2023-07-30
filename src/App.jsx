import { useState } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BIdp from './Components/BIdp'
import AdminLayout from "./Components/Farmers/Farmerlayout"
import Layout from './Components/Layout'
import SignUp from './Components/Auth/Signup'
import { ToastContainer, toast } from 'react-toastify';
import Login from "./Components/Auth/Login"
import 'react-toastify/dist/ReactToastify.css';
import { Authprovider } from './Components/Auth/Authcontext'
import Add from "./Components/Farmers/Add"
import Products from './Components/Sellers/Products'
import Sellerlayout from './Components/Sellers/Sellerlayout'
import Getp from './Components/Farmers/Getp'
import Details from './Components/Sellers/Details'
import Footer from './Components/Footer'
import Orders from './Components/Farmers/Orders'
import Sorders from "./Components/Sellers/Sorders"
import Profile from './Components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Authprovider >

        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route exact path='/' element={<Home />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/add' element={<Add />} />
              <Route path='/products' element={<Products />} />
              <Route path='/bid' element={<BIdp />} />
              <Route path='/myp' element={<Getp />} />
              <Route path='/details/:id' element={<Details />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/Sorders' element={<Sorders />} />
              <Route path='/profile/:id' element={<Profile />} />

            </Route>
            <Route path="/Admin" element={<AdminLayout />} />
            <Route path="/user" element={<Sellerlayout />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>

      </Authprovider>


    </div>
  )
}

export default App

