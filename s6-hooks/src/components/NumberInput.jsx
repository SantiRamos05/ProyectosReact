import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {
    
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    });

    const {handleChange, suma, resta, multi, divi, numero1, numero2} = operaciones(numeros, setNumeros);

  return (
    <>
        <label>
           Numero 1: <input className='mx-2' name='numero1' value={numero1} onChange={handleChange} type="number" />
        </label>
        <label>
           Numero 2: <input className='mx-2' name='numero2' value={numero2} onChange={handleChange} type="number" />
        </label>

        <Resultado operacion='Suma' calculo={suma()} />
        <Resultado operacion='Resta' calculo={resta()} />
        <Resultado operacion='Multiplicacion' calculo={multi()} />
        <Resultado operacion='Division' calculo={divi()} />
    </>
  )
}

NumberInput.propTypes = {

}

export default NumberInput