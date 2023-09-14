import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackToTop from './BackToTop'

const Layout = () => {
  return (
    <><div className="">
        <Header/>
        <BackToTop/>
        <Outlet/>
        <Footer/>
    </div></>
)
}

export default Layout