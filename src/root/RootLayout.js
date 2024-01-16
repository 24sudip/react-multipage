
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout
