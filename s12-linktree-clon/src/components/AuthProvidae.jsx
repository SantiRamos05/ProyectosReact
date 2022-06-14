import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { auth, getUserInfo, registerNewUser, userExists } from '../firebase/firebase'

const AuthProvidae = ({children, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegister}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) =>{
          if(user){
            const isRegister = await userExists(user.uid)
            if(isRegister){
                const userInfo = await getUserInfo(user.uid);
                if (userInfo.processCompleted){
                    onUserLoggedIn(userInfo);
                }else{
                    onUserNotRegister(userInfo);
                }
              
            } else{
                await registerNewUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    profilePicture: '',
                    username: '',
                    processCompleted: false,
                });
              onUserNotRegister(user);
            }
          }else{
            onUserNotLoggedIn();
          }
        })
      },[navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegister]);
  return (
    <div>{children}</div>
  )
}

export default AuthProvidae