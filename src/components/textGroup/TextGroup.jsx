import React from 'react'
import s from './textGroup.module.scss'

export const TextGroup = () => {
    
    return (
        <div className={s.textGroup}>
            <label>{text}</label>
            <p className={s.littleText}>{children}</p>
        </div>
    )
}
