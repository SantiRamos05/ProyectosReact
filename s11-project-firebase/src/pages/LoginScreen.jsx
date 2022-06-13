import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { emailAndPasswordLogin, googleLogin } from '../actions/auth'

const LoginScreen = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
      });
    
      const { email, password} = data;
    
      const handleChange = (e) => {
        const value = e.target.value;

        setData({
          ...data,
          [e.target.name]: value,
        });
      };

    const dispatch = useDispatch();

    const handleGoogleLogin = () =>{
        dispatch(googleLogin("121212", "Pedro"));
    };
    const handleEmailLogin = (e) =>{
        e.preventDefault()
        if (email.trim() === "" || !email.trim().includes("@")) {
            return;
        }
        if (password.trim().length < 6) {
            return;
        }

        dispatch(emailAndPasswordLogin(email, password))
    }

  return (
    <div className='container'>
        <h3>Login</h3>
        <div className="row">
            <form onSubmit={handleEmailLogin} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input onChange={handleChange} value={email} name="email" id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">vpn_key</i>
                    <input onChange={handleChange} value={password} name="password" id="vpn_key" type="password" className="validate" />
                    <label htmlFor="vpn_key" >Password</label>
                    </div>
                </div>
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
            </form>
            
        </div>
    </div>
    
  )
}

export default LoginScreen