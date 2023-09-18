import React from 'react'
import Navbar from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js"
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet> المحتوى المتغير </Outlet>
        <Footer />
    </>
  )
}
