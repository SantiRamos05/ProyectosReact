import React from 'react'
import style from '../css/PublicLink.module.css'

const PublicLink = ({url, title}) => {
  return (
    <a className={style.publicLinkContainer} href={url}><div>{title}</div></a>
  )
}

export default PublicLink