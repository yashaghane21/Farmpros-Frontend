import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { Footer } from 'antd/es/layout/layout'

const Layout = () => {
  return (
    <div>
      <Nav />
  
      <Outlet />
     
    </div>
  )
}

export default Layout
