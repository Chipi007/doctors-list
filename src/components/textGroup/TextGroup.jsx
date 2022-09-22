import React from 'react'
import s from './textGroup.module.scss'
import { getNoun } from '../../utils/getNounFunc'

export const TextGroup = ({name, title, ...doctor}) => {

    const returnValue = (name) => {
        switch (name){
            case 'experience':
                return doctor.experience + ' ' + getNoun(doctor.experience, 'год', 'года', 'лет');
            case 'price':
                return doctor.price + ' ₽'  ;
            default: 
                return doctor[name];      
        }
    }
    
    return (
        <div className={s.textGroup}>
            <label className={s.label}>{title}</label>
            <p name = {name} className={s.littleText}>{returnValue(name)}</p>
        </div>
    )
}
