import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';




const Navbar = () => {
    const navigate = useNavigate;
    const {dispatch} = useContext(AuthContext);
    const handleLogout = () =>{
        dispatch({type: authTypes.logout})
        navigate("/login")
    };
    
    
    
    
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Phones Route</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className={ (isActive) => `nav-link ${isActive ? 'active text-white' : ''}`} aria-current="page" to="/iphone">Iphone</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={ (isActive) => `nav-link ${isActive ? 'active text-white' : ''}`} aria-current="page" to="/xiaomi">Xiaomi</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={ (isActive) => `nav-link ${isActive ? 'active text-white' : ''}`} aria-current="page" to="/search">Buscar</NavLink>
                </li>
            </ul>

            <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Salir</button>
            </div>
        </div>
      
    </nav>
    
  )
}

export default Navbar