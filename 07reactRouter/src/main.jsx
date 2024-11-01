import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'

import {Home, About, Contact, User, Github } from './components'
// import Github from './components/Github/Github.jsx'

import { githubInfoLoader } from './components/Github/Github.jsx'




// const router  = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])


// alternative routing method 

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >

        <Route path='' element = {<Home />} />
        <Route path='about' element = {<About />} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='user/:id' element = {<User/>} />
        <Route 
        loader = {githubInfoLoader}
        path='github' 
        element = {<Github/>}
        
        />
          {/* 'user/:id' => this will get the url value */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
