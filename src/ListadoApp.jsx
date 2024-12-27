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
        {id: 1,nombre:'Instalaciones necesarias', visto: true},
        {id: 2,nombre:'componentes', visto: true},
        {id: 3,nombre:'variables jsx', visto: true},
        {id: 4,nombre:'custom hooks', visto: false},
        {id: 5,nombre:'redux', visto: false},
        {id: 6,nombre:'componentes 2', visto: false},
        {id: 7,nombre:'funciones flecha', visto: false},
    ]
    const [arreglo, setArreglo] = useState(listado)
    console.log(arreglo)

    const onAddTask = (val) => {
        if(val < 1) return 
        const envio = {
            id: arreglo.length + 1,
            nombre: val,
            visto: true
        }
        setArreglo([...arreglo, envio])
        console.log(val)
    }

    return (
        <> 
        <Tarea agregarTarea={onAddTask}></Tarea>
        <div>Listado temas del curso</div>
         <ol>
           {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
         </ol>

         <button onClick={() => addTsk()}>Ingresar tarea</button>
        </>
      )
}