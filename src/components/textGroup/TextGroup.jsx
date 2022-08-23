import React from 'react'
import s from './textGroup.module.scss'

export const TextGroup = (props) => {
    const {name, title, value,} = props;
    
    return (
        <div className={s.textGroup}>
            <label>{title}</label>
            <p name = {name} className={s.littleText}>{value}</p>
        </div>
    )
}
