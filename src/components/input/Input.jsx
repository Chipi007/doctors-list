import React from 'react'
import SearchButton from "../../img/search.svg"
import { Button } from '../button/Button'
import s from "./input.module.scss"

export const Input = ({name, typeInp, placeholder}) => {

  const neededClass = (typeInp) => {
    switch(typeInp){
      case 'search-input':
        return s.search__input;
      case 'form-input':
        return s.form__input;
      default:
        return "";    
    }
  }

  return (
    <div className={s.input__container}>
      <input className = {neededClass(typeInp)} type="text" placeholder={placeholder}/>
      {typeInp === 'search-input' &&
        <Button type = 'button' typeBtn = 'search-button'>
          <img src={SearchButton} alt="" />
        </Button>
      }
    </div>
  )
}
