import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';

const NumberInput = () => {
    
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    });

    const { numero1, numero2} = numeros;
 
      const handleChange = (e) => {
           setNumeros({
            ...numeros,  //COPIA EL ESTADO ACTUAL DEL NUMERO
            [e.target.name] : parseFloat(e.target.value),
           });

      }

      const suma = () => numero1 +numero2

  return (
    <>
        <label>
           Numero 1: <input name='numero1' value={numero1} onChange={handleChange} type="number" />
        </label>
        <label>
           Numero 2: <input name='numero2' value={numero2} onChange={handleChange} type="number" />
        </label>

        <Resultado operacion='Suma' calculo={suma()} />
        <Resultado operacion='Resta' calculo={suma} />
        <Resultado operacion='Multiplicacion' calculo={suma} />
        <Resultado operacion='Division' calculo={suma} />
    </>
  )
}

NumberInput.propTypes = {

}

export default NumberInput