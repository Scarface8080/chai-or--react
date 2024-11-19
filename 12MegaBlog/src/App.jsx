import { useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import { login, logout } from './store/authSlice' 
import {Header, Footer } from './components'

function App() {

  // console.log(process.env.RAECT_APP_APPWRITE_URL);  // will woprk for create react app but we have used vite so we will use 


  // console.log(import.meta.env.VITE_APPWRITE_URL); 

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  

  useEffect(() => {
    authService.getCurrentUSer()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  return  !loading ? (
    <>
    
    <div className="min-h-screen flex flex-wrap bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
          TODO: {/*   outlet */}
          </main>
          <Footer /> 
        </div>
    </div>
    
    </>
  ) : null
}

export default App
