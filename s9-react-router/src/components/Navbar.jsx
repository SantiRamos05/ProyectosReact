import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';




const Navbar = () => {
    const history = useHistory();
    const {dispatch} = useContext(AuthContext);
    const handleLogout = () =>{
        dispatch({type: authTypes.logout})
        history.replace("/login")
    };
    
    
    
    
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Phones Route</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' aria-current="page" to="/iphone">Iphone</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' aria-current="page" to="/xiaomi">Xiaomi</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' aria-current="page" to="/search">Buscar</NavLink>
                </li>
            </ul>

            <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Salir</button>
            </div>
        </div>
      
    </nav>
    
  )
}

export default Navbar