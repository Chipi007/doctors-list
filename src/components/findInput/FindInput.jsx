import React from 'react'
import { Button } from '../button/Button'

export const FindInput = () => {
  return (
    <div className={s.inputContainer}>
    <input className = {cx(classes)} type="text" placeholder={placeholder}/>
      <Button type = 'button' typeBtn = 'searchButton'>
        <img src={SearchButton} alt="Поиск" />
      </Button>
    </div>
  )
}
