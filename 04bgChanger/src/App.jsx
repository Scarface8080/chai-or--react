import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  const [color, setColor] =  useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
    style={{backgroundColor: 'olive'}}
    >

      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
            <button 
            onClick={() => setColor('red')} 
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none' 
            style={{backgroundColor: 'red'}}>Red</button>

            <button 
             onClick={() => setColor('yellow')} 
            className='px-4 py-1 text-white rounded-full shadow-lg outline-none' 
            style={{backgroundColor: 'green'}}>green</button>

            <button className='px-4 py-1 text-white rounded-full shadow-lg outline-none' 
            style={{backgroundColor: 'blue'}}>blue</button>

            <button className='px-4 py-1 text-white rounded-full shadow-lg outline-none' 
            style={{backgroundColor: 'yellow'}}>yellow</button>


        </div>
      </div>

      
    </div>
    </>
   
  )
}

export default App
