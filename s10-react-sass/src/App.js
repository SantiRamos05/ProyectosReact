import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <h1 className='title'>Appp Sass</h1>
      <ul>
        <li>
          <a href='#'>Google</a>
        </li>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
      </ul>
      <h2>Contador: 0</h2>
      <Button type="btn btn-primary" text="+1"/>
    </div>
  )
}

export default App