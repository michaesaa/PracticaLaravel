import { useState } from "react"
import { Tarea } from "./components/Tarea"
const Items = ({nombre, visto}) => {
    return (
        <li>{nombre} 
        {visto ? "❤" : "🍳"}</li>
    )
}
export const ListadoApp = () => {
    const addTsk = () => {
       setArreglo([...arreglo,{nombre: 'jeje', visto: true}])
        console.log(arreglo)
    }

    let listado = [
        {nombre:'Instalaciones necesarias', visto: true},
        {nombre:'componentes', visto: true},
        {nombre:'variables jsx', visto: true},
        {nombre:'custom hooks', visto: false},
        {nombre:'redux', visto: false},
        {nombre:'componentes 2', visto: false},
        {nombre:'funciones flecha', visto: false},
    ]
    const [arreglo, setArreglo] = useState(listado)
    console.log(arreglo)
    return (
        <> 
        <div>Listado temas del curso</div>
         <ol>
           {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
         </ol>

        <Tarea></Tarea>
         <button onClick={() => addTsk()}>Ingresar tarea</button>
        </>
      )
}