import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
        {/* Left */}
        <div className='awesome'>
        <span>Increibles</span>
        <span>Servicios</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href='#'><button className='button s-button'>Descargar CV</button></a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* Right*/}
        <div className='cards'>
          <div style={{left: '14rem'}}>
            <Card emoji={HeartEmoji} heading={'Diseño'} detail={"Figma, Sketch, And More"}/>
          </div>

          <div style={{top: "12rem", left: "-4rem"}}>
            <Card emoji={Glasses} heading={"Developer"} detail={"Html, Css, JS, React"} />
          </div>

          <div style={{top: "19rem", left: "12rem"}}>
            <Card emoji={Humble} heading={"And More"} detail={"Html, Css, JS,Python, Django"} />
          </div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>

        </div>

    </div>
  )
}

export default Services