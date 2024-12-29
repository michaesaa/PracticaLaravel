import React from 'react'

export const userList = () => {
  return (
    <>
       <ol>
        {users.map(user => <li key={user.id}> {user.name}</li>)}
        <br />
    </ol>  
    </>
  )
}

