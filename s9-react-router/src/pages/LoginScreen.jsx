import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

const LoginScreen = () => {
  const {dispatch} = useContext(AuthContext);
  const history = useHistory();
  const handleLogin = () =>{
    dispatch({type: authTypes.login})
    history.push("/iphone")
  }
  return (
    <div className="container mt-5 text-center">
        <main className="form-signin">

            <img className="mb-4" src="/assets/logophone.svg" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </main>
    </div>
  )
}

export default LoginScreen