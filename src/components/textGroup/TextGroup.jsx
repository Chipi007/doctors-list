import React from 'react'
import s from './textGroup.module.scss'

export const TextGroup = ({name, title, value}) => {
    
    return (
        <div className={s.textGroup}>
            <label>{title}</label>
            <p name = {name} className={s.littleText}>{value}</p>
        </div>
    )
}
