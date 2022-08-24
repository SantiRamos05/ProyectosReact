import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";

const Services = () => {
  const transition = {duration: 1, type: "spring",};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/* Left */}
        <div className='awesome'>
        <span style={{color: darkMode? 'white' : ''}}>Increibles</span>
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
          <motion.div initial={{ left: "25rem" }} whileInView={{ left: "14rem" }} transition={transition}>
            <Card emoji={HeartEmoji} heading={'Diseño'} detail={"Figma, Sketch, And More Html, Css, JS,Python, Django"}/>
          </motion.div>

          <motion.div initial={{ left: "-11rem", top: "12rem" }} whileInView={{ left: "-4rem" }} transition={transition}>
            <Card emoji={Glasses} heading={"Developer"} detail={"Html, Css, JS, React Html, Css, JS,Python, Django"} />
          </motion.div>

          <motion.div initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "12rem" }} transition={transition}>
            <Card emoji={Humble} heading={"And More"} detail={"Html, Css, JS,Python, Django, Html, Css, JS,Python, Django"} />
          </motion.div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>

        </div>

    </div>
  )
}

export default Services