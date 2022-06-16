import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import style from '../css/Link.module.css'

const Link = ({docId, title, url, onDelete, onUpdate}) => {
    const [currentTitle, setCurrentTitle] = useState(title)
    const [currentUrl, setCurrentUrl] = useState(url)
    const [editTitle, setEditTitle] = useState(false)
    const [editUrl, seteditUrl] = useState(false)

    const titleRef = useRef(null)
    const urlRef = useRef(null)

    useEffect(() => {
      if(titleRef.current){
        titleRef.current.focus();
      }
    }, [editTitle])

    useEffect(() => {
        if(urlRef.current){
          urlRef.current.focus();
        }
      }, [editUrl])
    

    function handleEditTile(){
        setEditTitle(true)
    }
    function handleEditUrl(){
        seteditUrl(true)
    }
    function handleChangeTitle(e){
        setCurrentTitle(e.target.value);
    }
    function handleChangeUrl(e){
        setCurrentUrl(e.target.value)
    }
    function handleBlurTitle(e){
        setEditTitle(false)
        onUpdate(docId, currentTitle, currentUrl)
    }
    function handleBlurUrl(e){
        seteditUrl(false)
        onUpdate(docId, currentTitle, currentUrl)
    }
    function handleDelete(){
        onDelete(docId);
    }

  return (
    <div className={style.link}>
        <div className={style.linkInfo}>
            <div className={style.Title}>{editTitle ?(
                <><input ref={titleRef} value={currentTitle} onChange={handleChangeTitle} onBlur={handleBlurTitle}/></>) 
                : (<><button className={style.btnEdit} onClick={handleEditTile}><span className='material-icons'>edit</span></button>{currentTitle}</>)}</div>
            <div className={style.linkUrl}>{editUrl? (
                <><input ref={urlRef} value={currentUrl} onChange={handleChangeUrl} onBlur={handleBlurUrl}/></>)
                :(<><button className={style.btnEdit} onClick={handleEditUrl}><span className='material-icons'>edit</span></button>{currentUrl}</>)}</div>
        </div>
        <div className={style.linkActions}>
            <button  className={style.btnDelete} onClick={handleDelete}><span className='material-icons'>delete</span></button>
        </div>
    </div>
  )
}

export default Link