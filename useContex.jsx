import React, { useState } from 'react'
import { createContext } from 'react'

function useContex() {

    const myContext= createContext()

    const [count,setCount]=useState(1)
  return (
    <div>
        < myContext.Provider value={count}>
        <Child/>
        </myContext.Provider>
    </div>
  )
}

export default useContex