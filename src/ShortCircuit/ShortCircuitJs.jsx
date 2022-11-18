import React, { useState } from 'react'

const ShortCircuitJs = () => {
    const [text,setText]=useState('')
    const first=text || 'Hey'
    const second=text && 'hey'
    const changeText=()=>{
        if(text===''){
            setText("Purnima")
        }
        else{
            setText('')
        }
    }
  return (
    <div>
        <button on onClick={changeText}>Click</button>
      <h1>{text || "No text"}</h1>
      {text && <h1>text is true</h1> }
    </div>
  )
}

export default ShortCircuitJs
