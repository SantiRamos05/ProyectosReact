import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AuthRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route end path="/login" element={<LoginScreen/>} />
            <Route end path="/register" element={<RegisterScreen/>} />
            <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AuthRouter