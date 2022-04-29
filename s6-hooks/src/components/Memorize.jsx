import React, {useState, useMemo, useCallback} from 'react'
import { useMemorizeApp } from '../hooks/useMemorizeApp';
import Btn from './memos/Btn';
import Dato from './memos/Dato';


const Memorize = () => {

    const [ counter, pesadoMemo, add, hide] = useMemorizeApp();
    
  return (
    <>
    <h1>Memorizes: <Dato value={counter} /></h1>
    <hr />
    {pesadoMemo}
    <Btn add={add}/>
    <button onClick={hide}>Ver/ Quitar</button>
    </>
  )
}

export default Memorize