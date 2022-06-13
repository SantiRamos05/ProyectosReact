import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'

const Navbar = () => {

    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }
  return (
    <nav className='blue'>
        <div className="nav-wrapper">
          <a onClick={handleLogout} href="#" className="brand-logo right waves-effect"><i className="material-icons prefix">backspace</i></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="#">Nomina</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar