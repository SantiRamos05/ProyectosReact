import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd'
import TablaContactos from './TablaContactos'

const init = () =>{
    const contacto = localStorage.getItem("contacto");
    return contacto ? JSON.parse(contacto) : [];
}

const Contactos = () => {
    //const [state, dispatch] = useReducer(ContactosReducer, []);

    const [state, dispatch] = useReducer(ContactosReducer, [], init);

    useEffect(() => {
        localStorage.setItem("contacto", JSON.stringify(state));
    }, [state]);

    const [formView, setFormView] = useState(false)
    
  return (
    <div className="container mt-3">
        <button className="btn btn-primary" onClick={()=> setFormView(!formView)}>{!formView ? " Agregar Contacto" : "Cerrar Form"}</button>
        {
            formView && <FormularioAdd dispatch={dispatch}/> 
        }
        
        <TablaContactos contactos={state} dispatch={dispatch}/>
    </div>
  )
}

export default Contactos