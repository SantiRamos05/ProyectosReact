import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthProvidae from '../components/AuthProvidae'
import { existsUsername, updateUser } from '../firebase/firebase';

const ChooseUsernameView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0)
  const [currentUser, setCurrentUser] = useState({})
  const [username, setUsername] = useState("")

  function handleUserLoggedIn(user){
    navigate('/dashboard')
  }
  function handleNotRegister(user){
    setCurrentUser(user);
    setState(3);
  }
  function handleUserNotLoggedIn(user){
    navigate("/login")
  }

  function handleInputUsername(e){
    setUsername(e.target.value);
  }
  async function handleContinue(){
    if(username !== '' ){
      const exists = await existsUsername(username);
      if(exists){
        setState(5);
      }else{
        const tmp = {...currentUser};
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);

      }
    }
  }

  if(state === 3 || state === 5){
    return(
    <div>
      <h1>Bienvenido{currentUser.displayName}</h1>
      <p>Elige un nombre de usuario</p>
      {state === 5? <p>El usuario ya existe</p>: ""}
      <div>
        <input type="text" onChange={handleInputUsername}/>
      </div>
      <div>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  )}

  if(state === 6){
    return(
      <div>
        <h1>Estas registrado ya puedes ir al dashboard</h1>
        <Link to="/dashboard">Continuar</Link>
      </div>
    )
  }

  return (
    <AuthProvidae onUserLoggedIn={handleUserLoggedIn} onUserNotRegister={handleNotRegister} onUserNotLoggedIn={handleUserNotLoggedIn}></AuthProvidae>
  )
}

export default ChooseUsernameView