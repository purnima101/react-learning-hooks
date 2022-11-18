import React, { useState } from 'react'

const UseState = () => {
    let title="purnima"
    const [text,setText]=useState("Purnimaaaaaaaaaa")
    const clickHandle=()=>
    {
        setText("Agarwal")
    }
  return (
    <>
      <p>{text}</p>
      <button type="button" onClick={clickHandle}>click</button>
    </>
  )
}

export default UseState
