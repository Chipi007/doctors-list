import React from 'react'
import s from './avatar.module.scss'

export const Avatar = ({src, alt, className}) => {
  return (
    <div className={s.avatarContainer}>
        <img src={src} alt={alt} className={className}/>
    </div>
  )
}
