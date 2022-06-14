import React from 'react'
import { Link } from 'react-router-dom'

const DashboardWrapper = ({children}) => {
  return (
    <div>
        <nav>
            <div>Logo</div>
            <Link to="/dashboard">Links</Link>
            <Link to="/dashboard/profile">profile</Link>
            <Link to="/singout">Salir</Link>
        </nav>
        <div>{children}</div>
    </div>
  )
}

export default DashboardWrapper