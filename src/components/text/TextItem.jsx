import React from 'react'
import s from './text.module.scss'

export const TextItem = ({className, children}) => {

  const neededClass = (className) => {
    switch (className){
      case 'normal__text':
        return s.normal__text;
      case 'big__text':
        return s.big__text;
       case 'little__text':
        return s.little__text;
      default:
        return '';     
    }
  }
  return (
    <div className={neededClass(className)}>{children}</div>
  )
}
