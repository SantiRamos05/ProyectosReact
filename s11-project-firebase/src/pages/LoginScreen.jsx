import React from 'react'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <div className='container'>
        <h3>Login</h3>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">vpn_key</i>
                    <input id="vpn_key" type="password" className="validate" />
                    <label for="vpn_key" >Password</label>
                    </div>
                </div>
            </form>
            <div className='row'>
                <div className='col s6'>
                    <button class="btn waves-effect waves-light pink" type="submit" name="action">Ingresar
                    <i class="material-icons right">account_circle</i>
                    </button>
                </div>
                <div className='col s6'>
                <GoogleButton onClick={() =>console.log("googlre")} />
                </div>
                <Link to="/register">Registrate</Link>
            </div>
        </div>
    </div>
    
  )
}

export default LoginScreen