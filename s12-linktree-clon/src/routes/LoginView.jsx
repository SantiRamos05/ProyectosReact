import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import AuthProvidae from '../components/AuthProvidae'
import { auth, userExists } from '../firebase/firebase'

const LoginView = () => {
  const navigate = useNavigate();
  //const [currentUser, setCurrentUser] = useState(null)
  /*
  Estados App 0:inicializado 1: loading 2: login completo 3: login pero sin registro 4: no hay nadie logueado 5:ya existe 6:nuevo username
   */
  const [state, setCurrentState] = useState(0)

  
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await singInWithGoogle(googleProvider);

    async function singInWithGoogle(googleProvider){
      try{
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res)
      }catch(error){
        console.error(error);
      }
    }
  }
  function handleUserLoggedIn(user){
    navigate('/dashboard')
  }
  function handleNotRegister(user){
    navigate('/choose-username')
  }
  function handleUserNotLoggedIn(user){
    setCurrentState(4)
  }

  
  if (state === 4){
    return (
      <div><button onClick={handleOnClick}>Login con Google</button></div>
    )
  }
  
  return <AuthProvidae onUserLoggedIn={handleUserLoggedIn} onUserNotRegister={handleNotRegister} onUserNotLoggedIn={handleUserNotLoggedIn}>
    <div>Loading...</div>
  </AuthProvidae>

  
  }
export default LoginView