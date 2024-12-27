import { useState } from 'react'
import React from 'react'

export const ContadorApp = ({ value }) => { 

    const [contador, setContador] = useState(value)
    const handleClick = ()  => {
    
        setContador(contador + 100)
        console.log(setContador)
    }
    
  return (
    <>
        <h1>contador:</h1>
        <p>{contador}</p>

        <Tarea></Tarea>

        <button onClick= {handleClick}>
            soy un boton 
        </button>
    </>
  )
}
