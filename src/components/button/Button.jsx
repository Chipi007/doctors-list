import React from 'react'
import s from "./button.module.scss"

export const Button = ({typeBtn, openModal, children, type}) => {

  const neededClass = (typeBtn) => {
    switch(typeBtn){
      case 'add-button':
        return s.add__button;
      case 'primary-button':
        return s.primary__button;
      case 'secondary-button':
        return s.secondary__button;
      case 'search-button':
        return s.search__button;
      case 'photo-button':
        return s.photo__button;
      case 'item-button':
        return s.item__button;    
      default:
        return "";    
    }
  }
  return (
    <button type = {type} className={neededClass(typeBtn)} onClick = {openModal}>{children}</button>
  )
}
