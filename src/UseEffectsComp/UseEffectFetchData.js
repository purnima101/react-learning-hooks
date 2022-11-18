import React, { useEffect, useState } from 'react'


const url = 'https://api.github.com/users';
const UseEffectFetchData = () => {
    const [users,setUsers]=useState([])

    const getUsers=async()=>{
        const response=await fetch(url)
        const user=await response.json()
        setUsers(user)
    }

    useEffect(()=>{
        getUsers()
    },[])

  return (
    <>
      <h1>Users:</h1>
      {users.map((user)=>{
            return(
                <p key={user.id}>{user.login}</p>
            )
      })}
    </>
  )
}

export default UseEffectFetchData
