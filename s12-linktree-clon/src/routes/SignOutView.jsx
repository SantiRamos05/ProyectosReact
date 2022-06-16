import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvidae from '../components/AuthProvidae'
import { logout } from '../firebase/firebase';

const SignOutView = () => {
  const navigate = useNavigate();

  async function handleUserLoggedIn(user){
    await logout();
  }
  function handleNotRegister(user){
    navigate("/login");
  }
  function handleUserNotLoggedIn(){
    navigate("/login")
  }
  
  return (
    <AuthProvidae onUserLoggedIn={handleUserLoggedIn} onUserNotLoggedIn={handleUserNotLoggedIn} onUserNotRegister={handleNotRegister}></AuthProvidae>
  )
}

export default SignOutView