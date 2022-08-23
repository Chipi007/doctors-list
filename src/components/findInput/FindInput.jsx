import React from 'react'
import { Button } from '../button/Button'
import SearchButton from "../../img/search.svg"
import s from './findInput.module.scss'

export const FindInput = () => {
  return (
    <div className={s.inputContainer}>
      <input className = {s.findInput} type="text" placeholder = 'Поиск...'/>
        <Button type = 'button' typeBtn = 'searchButton'>
          <img src={SearchButton} alt="Поиск" />
        </Button>
    </div>
  )
}
