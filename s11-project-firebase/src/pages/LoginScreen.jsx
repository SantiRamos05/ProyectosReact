import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { googleLogin } from '../actions/auth'

const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleGoogleLogin = () =>{
        dispatch(googleLogin("121212", "Pedro"));
    };

  return (
    <div className='container'>
        <h3>Login</h3>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">vpn_key</i>
                    <input id="vpn_key" type="password" className="validate" />
                    <label htmlFor="vpn_key" >Password</label>
                    </div>
                </div>
            </form>
            <div className='row'>
                <div className='col s6'>
                    <button className="btn waves-effect waves-light pink" type="submit" name="action">Ingresar
                    <i className="material-icons right">account_circle</i>
                    </button>
                </div>
                <div className='col s6'>
                <GoogleButton onClick={handleGoogleLogin} />
                </div>
                <Link to="/register">Registrate</Link>
            </div>
        </div>
    </div>
    
  )
}

export default LoginScreen