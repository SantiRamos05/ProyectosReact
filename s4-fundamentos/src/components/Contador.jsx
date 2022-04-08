import { useState } from 'react'

export const Contador = (props) => {
  const [contador, setContador] = useState(props.inicial);

  const aumentar = () => {
      setContador(contador + 1)      //forma 1
  };
  const disminuir = () => {
    setContador((actual)=>actual -1) //forma 2
  }

  return (
    <div>
        <h1>Contador :{contador}</h1>
        <hr />
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
    </div>
    
  )
}
