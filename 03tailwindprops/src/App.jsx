import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'Hamza',
    age: 24 
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='p-4 text-black bg-green-400 rounded-xl'>Tailwind test</h1>
      <Card username = 'Hamza Shoukat' someObj = {newArr} btnText = 'click me'/>
      <Card username = 'ScarFace8080' someObj = {newArr} />
    </>
  )
}

export default App
