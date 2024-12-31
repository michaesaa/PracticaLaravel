import { useState } from "react"
export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial)

  const incrementar = (valor = 1) => {
    setContador(contador + valor)
  }
  const decrementar = (valor = 1, negativo) => {
    if (!negativo && contador < 1) return
    setContador(contador - valor)
  }
  const resetear = () => {
    setContador(0)
    console.log(contador)
  }


  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}

