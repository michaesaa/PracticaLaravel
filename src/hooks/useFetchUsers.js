import { useEffect, useState } from "react"

export const useFetchUsers = (endPoint) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchdata = async() => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setData(data)    
            setIsLoading(false)
        }catch(error){
            console.error(error)
        }   
 
    }
    useEffect(() => {
        fetchdata()
    }, [endPoint])


   return{
    data,
    isLoading
   }
    


}


