import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../actions/auth';

const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className='container'>
        <h3>Register</h3>
        <div className="row">
            <form onSubmit={handleRegister} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input onChange={handleChange} value={email} name="email" id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input onChange={handleChange} value={username} name="username" id="account_circle" type="text" className="validate" />
                    <label htmlFor="text">Username</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">vpn_key</i>
                      <input onChange={handleChange} value={password} id="icon_prefix3" className="materialize-textarea" name="password" type="password"/>
                      <label htmlFor="icon_prefix3">Password</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">vpn_key</i>
                      <input onChange={handleChange} value={password2} id="icon_prefix4" className="materialize-textarea" name="password2" type="password"/>
                      <label htmlFor="icon_prefix4">Confirm Password</label>
                    </div>
                </div>
                <div className='row'>
                  <div className='col s6'>
                      <button className="btn waves-effect waves-light pink" type="submit" name="action">Register
                      <i className="material-icons right">account_circle</i>
                      </button>
                  </div>
                <div className='col s6'>
               
                </div>
                  <Link to="/login">Ingresa</Link>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default RegisterScreen