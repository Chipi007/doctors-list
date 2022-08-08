import React from 'react'
import s from './label.module.scss'

export const Label = ({text, className}) => {

  const neededClassName = () => {
    switch (className){
      case 'item__label':
        return s.item__label;
      case 'modal__label':
        return s.modal__label;
      default:
        return '';    
    }
  }
  return (
    <label className={neededClassName(className)}>{text}</label>
  )
}
