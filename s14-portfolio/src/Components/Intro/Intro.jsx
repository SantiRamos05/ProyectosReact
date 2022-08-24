import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Intro = () => {
  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hola :) Soy</span>
                <span>Santiago Ramos</span>
                <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Ver mas</button>
            <div className="i-icons">
              <img src={Github} alt=""></img>
              <img src={LinkedIn} alt=""></img>
              <img src={Instagram} alt=""></img>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img initial={{left: '-36%'}} whileInView={{left: '-24%'}} transition={transition} src={glassesimoji} alt="" />
            <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div">
              <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
            </motion.div>
            <motion.div initial={{ left: "9rem", top: "18rem" }}  whileInView={{ left: "0rem" }} transition={transition} className="floating-div">
              <FloatingDiv image={thumbup} txt1="Best" txt2="Award" />
            </motion.div>

            <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur' style={{background: "#C1F5FF", top: "17rem",width: "21rem",height: "11rem", left: "-9rem",
          }}></div>
        </div>
    </div>
  )
}

export default Intro