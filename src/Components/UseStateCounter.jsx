import React, { useState } from 'react'

const UseStateCounter = () => {
    const [value,setValue]=useState(0)
    const complexIncrease=()=>{
        setTimeout(()=>{
            // setValue(value+1)
            setValue((prevState)=>{
                return prevState+1
            })
        },2000)
    }
  return (
    <>
      <h1>Regular Counter</h1>
      <h2>{value}</h2>
      <button onClick={()=>setValue(value-1)}>-</button>
      <button onClick={()=>setValue(0)}>Reset</button>
      <button onClick={()=>setValue(value+1)}>+</button>
      <hr/>
      <h1>Complex Counter</h1>
      <h2>{value}</h2>
      <button onClick={complexIncrease}>+ delayed</button>
    </>
  )
}

export default UseStateCounter
