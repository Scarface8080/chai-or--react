import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    
    <Header />
    <Outlet />
    <Footer />
    
    
    </>
  )
}

export default Layout