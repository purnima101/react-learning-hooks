import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'


const UseEffectBasic = () => {
    const [value,setValue]=useState(0)
    useEffect(()=>{
        // alert("useEffect")
        document.title=(`New messages (${value})`)
    },[value])
    const clickHandle=()=>{
        setValue((preValue)=>{
            return(preValue+1)
        })
    }
  return (
    <div>
    <h1>{value}</h1>
    <Button variant="outlined" onClick={clickHandle}>Increase</Button>
    </div>
  )
}

export default UseEffectBasic
