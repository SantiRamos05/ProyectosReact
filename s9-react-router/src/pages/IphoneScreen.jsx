import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const IphoneScreen = () => {
  const iphone = Characters.filter(charater => charater.type === "i")
  return (
    <div className='container mt-3'>
      <h1>Iphone Screen</h1>
      <hr />
      <div className='row'>
      {
        iphone.map((iphone)=>(<Card key={iphone.id}{...iphone} />))
      }
      </div>
     
    </div>
  )
}

export default IphoneScreen