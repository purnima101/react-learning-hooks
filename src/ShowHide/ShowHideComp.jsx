import React, { useState } from 'react'

const ShowHideComp = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
     {show && <Item/>}
      <button type="button" onClick={()=>setShow(!show)}>Show/Hide</button>
    </div>
  )
}

const Item=()=>{
    return(
        <div>Heelo this is meee</div>
    )
}

export default ShowHideComp
