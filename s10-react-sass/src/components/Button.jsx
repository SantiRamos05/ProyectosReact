import React from 'react'

const Button = ({type, text}) => {
  return (
    <div>
        <button className={type}>{text}</button>
    </div>
  )
}

export default Button