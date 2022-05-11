import React from 'react'
import Card from '../components/Card'
import { Characters } from '../models/Characters'

const XiaomiScreen = () => {
  const xiaomi = Characters.filter(charater => charater.type === "x")
  return (
    <div className='container mt-3'>
      <h1>xiaomi Screen</h1>
      <hr />
      <div className='row'>
      {
        xiaomi.map((xiaomi)=>(<Card key={xiaomi.id}{...xiaomi} />))
      }
      </div>
     
    </div>
  )
}

export default XiaomiScreen