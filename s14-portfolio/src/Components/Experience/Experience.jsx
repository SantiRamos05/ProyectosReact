import React from 'react'
import './Experience.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="expereince" id='Experience'>
        <div className="achievement">
            <div className="circle">+2</div>
            <span style={{color: darkMode? 'white' : ''}}>Años</span>
            <span>Experincia</span>
        </div>

        <div className="achievement">
            <div className="circle">+5</div>
            <span style={{color: darkMode? 'white' : ''}}>Proyectos</span>
            <span>Finalizados</span>
        </div>

        <div className="achievement">
            <div className="circle">+2</div>
            <span style={{color: darkMode? 'white' : ''}}>Años</span>
            <span>Experincia</span>
        </div>
    </div>
    
  )
}

export default Experience