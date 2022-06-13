import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'


const AuthRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/*<Route end path="/login" element={<LoginScreen/>} />
            <Route end path="/app" element={<AppRouter/>} />
            <Route path='*' element={<Navigate to="/login" />}/>*/}
            <Route path="/auth/login" element={<LoginScreen/>} />
            <Route end path="/auth/register" element={<RegisterScreen/>} />
            <Route path='*' element={<Navigate to="/auth/login" />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AuthRouter