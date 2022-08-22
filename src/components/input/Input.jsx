import React from 'react'
import SearchButton from "../../img/search.svg"
import { Button } from '../button/Button'
import s from "./input.module.scss"
import cx from 'classnames';

export const Input = ({typeInp, placeholder}) => {
  
  const neededClass = (styles, inputVariants) =>
  Object.keys(inputVariants).map(key => {
    const value = inputVariants[key];
    return styles[`${value}`];
  });

  const classes = neededClass(s, {
    typeInp, 
  });

  return (
    <div className={s.inputContainer}>
      <input className = {cx(classes)} type="text" placeholder={placeholder}/>
      {typeInp === 'searchInput' &&
        <Button type = 'button' typeBtn = 'searchButton'>
          <img src={SearchButton} alt="Поиск" />
        </Button>
      }
    </div>
  )
}
