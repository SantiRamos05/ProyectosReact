import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4b9r4cv', 'template_airp6zs', form.current, 'g1zbMlC7HsJx8FSxd')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Deja un Mensaje</span>
                <span>Contactame</span>
                <div className="blur s-blur1" style={{background: " #ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Gracias por Contactarme :)"}</span>
                <div  className="blur c-blur1"  style={{ background: "var(--purple)" }}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact