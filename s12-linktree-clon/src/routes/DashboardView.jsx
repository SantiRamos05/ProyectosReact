import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvidae from '../components/AuthProvidae';
import DashboardWrapper from '../components/DashboardWrapper';
import {v4 as uuidv4} from 'uuid';
import { deleteLink, getLinks, insertNewLink, updateLink } from '../firebase/firebase';
import Link from '../components/Link';
import style from '../css/Dashboard.module.css';
import styleLink from '../css/Link.module.css'

const DashboardView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  async function handleUserLoggedIn(user){
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid);
    setLinks([...resLinks]); 
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

  async function handleDeleteLink(docId){
    await deleteLink(docId);
    const tmp = links.filter(link => link.docId !== docId);
    setLinks([...tmp]);
  }
  async function handleUpdateLink(docId, title, url){
    const link = links.find(item => item.docId === docId);
    link.title = title;
    link.url = url;
    await updateLink(docId, link);
  
  }

  return(
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <form action='' className={style.entryConatiner} onSubmit={handleOnSubmit}>
          <label htmlFor='title'>Title</label>
          <input className='input' type="text" name="title" onChange={handleOnChange}/>

          <label htmlFor='url'>Url</label>
          <input className='input' type="text" name="url" onChange={handleOnChange}/>

          <input className='btn' type="submit" value="Crear nuevo link" />

        </form>
        <div className={styleLink.linksContainer}>{links.map((link) => (<Link key={link.id} docId={link.docId} url={link.url} title={link.title} onDelete={handleDeleteLink} onUpdate={handleUpdateLink}/> ))}</div>
      </div>
    </DashboardWrapper>
  )

  
}

export default DashboardView