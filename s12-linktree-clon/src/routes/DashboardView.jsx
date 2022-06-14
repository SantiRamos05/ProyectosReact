import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvidae from '../components/AuthProvidae';
import DashboardWrapper from '../components/DashboardWrapper';
import {v4 as uuidv4} from 'uuid';
import { insertNewLink } from '../firebase/firebase';

const DashboardView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  function handleUserLoggedIn(user){
    setCurrentUser(user);
    setState(2);
  }
  function handleNotRegister(user){
    navigate("/login");
  }
  function handleUserNotLoggedIn(user){
    navigate("/login")
  }

  if(state === 0){
    return (
      <AuthProvidae onUserLoggedIn={handleUserLoggedIn} onUserNotRegister={handleNotRegister} onUserNotLoggedIn={handleUserNotLoggedIn}>Loading..</AuthProvidae>
    )
  }

  function handleOnSubmit(e){
    e.preventDefault();
    addLink();
  }

  function addLink(){
    if(title !== "" && url !== ""){
      const newlink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid
      }
      const res = insertNewLink(newlink);
      newlink.docId = res.id;
      setTitle('');
      setUrl('');
      setLinks([...links, newlink]);
    }
  }

  function handleOnChange(e){
    const value = e.target.value
    if(e.target.name === 'title'){
      setTitle(value);
    }
    if(e.target.name === "url"){
      setUrl(value)
    }
  }

  return(
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <form action='' onSubmit={handleOnSubmit}>
          <label htmlFor='title'>Title</label>
          <input type="text" name="title" onChange={handleOnChange}/>

          <label htmlFor='url'>Url</label>
          <input type="text" name="url" onChange={handleOnChange}/>

          <input type="submit" value="Crear nuevo link" />

        </form>
      </div>
    </DashboardWrapper>
  )

  
}

export default DashboardView