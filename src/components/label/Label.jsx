import React from 'react'
import s from './label.module.scss'

export const Label = ({text, className}) => {

  const neededClassName = () => {
    switch (className){
      case 'itemLabel':
        return s.itemLabel;
      case 'modalLabel':
        return s.modalLabel;
      default:
        return '';    
    }
  }
  return (
    <label className={neededClassName(className)}>{text}</label>
  )
}
