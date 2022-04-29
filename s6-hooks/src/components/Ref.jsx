import React, {useRef} from 'react'

const Ref = () => {

    const ref = useRef(null)

    const handleRef = () => {
        //const ref = document.getElementById("area")
        ref.current.value =" Alma Marcela Gozo"
    }
  return (
    <div>
        <h1 onClick={handleRef}>useRef</h1>
        <hr/>
        <textarea ref={ref} placeholder='Escribe un mensaje...'></textarea>
    </div>
  )
}

export default Ref