import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target:  '_blank',
//       id: 'root',
//   },
//   children: 'Click me to visit google'

// }

// const AnotherElement = (
//   <a href="http://google.com" target='_blank'>visit google</a>
// )

const anotherUser = "Hamza Shoukat"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target:  '_blank',
    id: 'root',
  },
  'Click me to visit Google',
   anotherUser
)


createRoot(document.getElementById('root')).render(
  ReactElement
)

// createRoot(document.getElementById('root')).render(
  
//   <StrictMode>
//     <App />
//   </StrictMode>
// )