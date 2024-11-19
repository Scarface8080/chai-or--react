import React from 'react'

function Container({children}) {
  return    // we can remove paranthesis if there is a single line code inside return statement
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  
}

export default Container