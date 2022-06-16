import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import PublicLink from '../components/PublicLink';
import { existsUsername, getProfilePhotoUrl, getUserProfileInfo } from '../firebase/firebase';
import style from '../css/PublicProfileView.module.css'
import styleLinks from '../css/PublicLink.module.css'

const PublicProfileView = () => {
  const params = useParams();
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState("")
  const [state, setState] = useState(0);

  useEffect(()=>{
    getProfile();
    async function getProfile(){
      const username = params.username;
      try {
        const userUid = await existsUsername(username);
        if (userUid){
          const userInfo = await getUserProfileInfo(userUid);
          setProfile(userInfo);
          const url = await getProfilePhotoUrl(userInfo.profileInfo.profilePicture);
          setUrl(url); 
        }else{
          setState(7);
        }
      } catch (error) {
        
      }
    }
    
  },[params]);

  if(state === 7){
    return<div><h1>Username no existe</h1></div>
  }

  return (
    <div className={style.profileContainer}>
      <div className={style.profilePicture}>
        <img src={url} alt="" />
      </div>
      <h2>{profile?.profileInfo.username}</h2>
      <h3>{profile?.profileInfo.displayName}</h3>
      <div className={styleLinks.publicLinksContainer}>
        {profile ?.linksInfo.map(link => (<PublicLink key={link.docId} url={link.url} title={link.title}/>))}
      </div>
    </div>
  )
}

export default PublicProfileView