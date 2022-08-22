import React from 'react'
import SearchButton from "../../img/search.svg"
import { Button } from '../button/Button'
import s from "./input.module.scss"
import cx from 'classnames';
import { neededClass } from '../../utils/util';

export const Input = ({typeInp, placeholder}) => {

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
