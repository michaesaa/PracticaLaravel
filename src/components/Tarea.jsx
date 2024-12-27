import { useState } from "react"

export const Tarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        const envio = {
            nombre: inputValue,
            visto: false
        }
        event.preventDefault()
        console.log(inputValue)
        agregarTarea(tareas => [...tareas, envio])
    }
  return (
    <>
    <form onSubmit={onSubmit}>
    <input 
       type="text" 
       placeholder="Ingrese la tarea"
       value={inputValue}
       onChange={onInputChange}
       />
    </form>
    </>
  )
}


