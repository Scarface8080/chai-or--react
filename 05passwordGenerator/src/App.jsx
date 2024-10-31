import { useState, useCallback, useEffect, useRef  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setLenght] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook

  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className="w-full max-w-md p-4 px-4 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md">

          <h1 className="text-center text-white">Passwrod Generator</h1>
          
          
          <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input 
          type="text"
          value={password}
          className='w-full px-3 py-1 outline-none'
          placeholder='passwrod'
          readOnly
          ref={passwordRef}
          
          
          />  

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
          
          </div>  
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="range" 
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{setLenght(e.target.value)} }/>
                  <label > Lenght: {length}</label>
              </div>


              <div className="flex items-center gap-x-1">
                <input
                 type="checkbox" 
                 defaultChecked = {numberAllowed}
                 id="numberInput"
                 onChange={() => {
                  setnumberAllowed((prev) => !prev);
                 }} />

                <label htmlFor="numberInput">Numbers</label>


              </div>

              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="characterInput"
                      onChange={() => {
                          setCharAllowed((prev) => !prev )
                      }}
                  />
                  <label htmlFor="characterInput">Characters</label>
              </div>
          </div>  

        </div> 



    
       

          
    </>
  )

}

 


export default App
