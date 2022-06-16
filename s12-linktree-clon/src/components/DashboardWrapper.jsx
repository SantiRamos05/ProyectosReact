import React from 'react'
import { Link } from 'react-router-dom'
import style from '../css/DashboardWrapper.module.css'

const DashboardWrapper = ({children}) => {
  return (
    <div >
        <nav className={style.nav}>
            <div className={style.logo} >Logo</div>
            <Link to="/dashboard">Links</Link>
            <Link to="/dashboard/profile">profile</Link>
            <Link to="/singout">Salir</Link>
        </nav>
        <div className='main-container'>{children}</div>
    </div>
  )
}

export default DashboardWrapper