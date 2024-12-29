import { useEffect, useState } from "react"

export const UsersApp = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            setUsers(data)    
        }catch(error){
            console.error(error)
        }   
 
    }
    
    // para que se cree al comienzo del componente 
    useEffect( () => {
        fetchUsers()
    }, [])  
   
//  nameUsers = users.name   
  return (
    <>
    <h1>lista de usuarios</h1>
    <ol>
        {users.map(user => <li key={user.id}> {user.name}</li>)}
        <br />
    </ol>    
    <ol> 
        {users.map(user => <li key={ user.id}> {user.website}</li>)}
    </ol>    
 
    <button></button>

    </>
  )
}


