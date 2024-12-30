import { useEffect, useState } from "react"
import { useFetchUsers } from "../hooks/useFetchUsers"
export const UserList = ({ endPoint }) => {
    const { data, isLoading } = useFetchUsers(endPoint)

    return (
       <>
          <ul>
              {isLoading 
              ? <p>cargando...</p> 
              : endPoint == 'users' 
              ? data.map(item => <li key={item.id}>{item.name}</li>)
              : data.map(item => <li key={item.id}>{item.body}</li>)
              }

          </ul>  
        </>
    )
}

