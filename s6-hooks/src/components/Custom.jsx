import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

const Custom = () => {
    const [counter, increment, dincrement] = useCounter(5,2);
  return (
    <>
    <h1>CustomHook: {counter}</h1>
    <hr />
    <button onClick={increment}>+1</button>
    <button onClick={dincrement}>-1</button>
    </>
  )
}

export default Custom