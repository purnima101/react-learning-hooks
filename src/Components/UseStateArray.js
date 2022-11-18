import React, { useState } from 'react'
import { data } from '../data'

const UseStateArray = () => {
    const [people,setPeople]=useState(data)
    const deleteItem=(item)=>
    {
        let peopleNew= people.filter((people)=>people.id!==item)
        setPeople(peopleNew)
    }
  return (
    <>
      {
        people.map((people)=>{
            return(<> <h1 key={people.id}>{people.name}</h1>
            <button type='button' onClick={()=>{
                deleteItem(people.id)
            }}>Delete</button>
            </>)
        })
      }
    </>
  )
}

export default UseStateArray
