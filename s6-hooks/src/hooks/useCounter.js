import React, {useState} from 'react'

const useCounter = (initialValue, range = 1) => {
   
    const [counter, setCounter] = useState(initialValue);
    
    const increment = () =>{
        setCounter(counter + range);
    
    }
    const dincrement = () =>{
        setCounter(counter-1);
    }
    return [counter, increment, dincrement];
}

export default useCounter