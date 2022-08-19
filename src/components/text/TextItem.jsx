import React from 'react'
import s from './text.module.scss'

export const TextItem = ({className, children}) => {

  const neededClass = (className) => {
    switch (className){
      case 'normalText':
        return s.normalText;
      case 'bigText':
        return s.bigText;
       case 'littleText':
        return s.littleText;
      default:
        return '';     
    }
  }
  return (
    <div className={neededClass(className)}>{children}</div>
  )
}
