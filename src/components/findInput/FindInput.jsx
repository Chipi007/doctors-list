import React from 'react'
import s from './findInput.module.scss'

export const FindInput = ({query, setQuery}) => {

  return (
    <div className={s.inputContainer}>
      <input className = {s.findInput} type="text" placeholder = 'Поиск...' value = {query} onChange = {e => setQuery(e.target.value)}/>
    </div>
  )
}
