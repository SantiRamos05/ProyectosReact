import React, { useContext }  from 'react'
import { Navigate, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const PublicRouter = ({children}) => {
  const {log} = useContext(AuthContext)
  return !log.log ? children: <Navigate to="/iphone" />

  
}

export default PublicRouter