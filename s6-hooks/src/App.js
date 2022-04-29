import React from 'react'
import Calculadora from './components/Calculadora'
import Effect from './components/Effect'
import LayaoutEffect from './components/LayaoutEffect'
import State from './components/State'
import Ref from './components/Ref'
import Memorize from './components/Memorize'
import Custom from './components/Custom'

const App = () => {
  return (
    //<State />
    <div className='container text-center'>
      <Custom />
      <hr />
      <Memorize />
    </div>
    
   
    //<div className='container text-center'>
    //  <h1>React Calculadora - PWA</h1>
    //  <hr />
    //  <Calculadora />
    //</div>
  )
}

export default App