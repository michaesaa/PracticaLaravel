import { useEffect, useState } from "react"
import { UserList } from "./components/userList"

export const UsersApp = () => {
    const [endPoint, setendPoint] = useState('users')
    const handldenFetch = () => {
        setendPoint('comments')
    }
    return (
      <>
      <h1>lista de usuarios</h1>
     
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handldenFetch}>oprime para llamar la info </button>

      </>
    )
}


