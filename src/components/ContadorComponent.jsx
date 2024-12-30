import { use } from 'react'
import { useCounter } from '../hooks/useCounter'
export const ContadorComponent = () => {

   const { contador, incrementar, decrementar, resetear } = useCounter()

   
  return (
    <>
      <h1>contador:</h1>
      <p>{contador}</p>
      <button className="btn btn-primary" onClick={() => incrementar(1)}>+1</button>
      <button className="btn btn-danger" onClick={() => resetear()}>reset</button>
      <button className="btn btn-primary" onClick={() => decrementar(1,false)}>-1</button>
    </>
  )
}

