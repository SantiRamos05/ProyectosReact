import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvidae from '../components/AuthProvidae'
import DashboardWrapper from '../components/DashboardWrapper'
import { getProfilePhotoUrl, setUserProfilePhoto, updateUser } from '../firebase/firebase';
import style from '../css/EditProfileView.module.css'

const EditProfileView = () => {

  const navigate = useNavigate;
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState(null)

  const fileRef = useRef(null);

  async function handleUserLoggedIn(user){
    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url)
    setState(2);
    
  }
  function handleNotRegister(user){
    navigate("/login");
  }
  function handleUserNotLoggedIn(){
    navigate("/login")
  }
  function handleOpenFile(){
    if(fileRef.current){
      fileRef.current.click();
    }
  }
  function handleChangeFile(e){
    const files = e.target.files;
    const fileReader = new FileReader();

    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async function () {
        const imageData = fileReader.result;
        const res = await setUserProfilePhoto(currentUser.uid, imageData);
        console.log(res);

        if(res){
          const tmpUser = {...currentUser};
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser({...tmpUser});
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setProfileUrl(url);
        }
      }
    }
  }

  if(state !== 2){
    return <AuthProvidae onUserLoggedIn={handleUserLoggedIn} onUserNotLoggedIn={handleUserNotLoggedIn} onUserNotRegister={handleNotRegister}></AuthProvidae>
  }

  return (
    <DashboardWrapper>
      <div>
        <h2>Edit Profile Info</h2>
        <div className={style.profilePictureContainer} >
          <div>
            <img src={profileUrl} alt='' width={100}/>
          </div>
          <div>
            <button className='btn' onClick={handleOpenFile}>Elige Imagen de Perfil</button>
            <input className={style.fileInput} ref={fileRef} type="file" onChange={handleChangeFile} />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  )
}

export default EditProfileView