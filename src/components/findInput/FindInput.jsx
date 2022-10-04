import React from 'react'
import s from './findInput.module.scss'

export const FindInput = ({setSearchParams, searchTerm}) => {

  const handleSearch = (e) => {
    const search = e.target.value;
    return search ? setSearchParams({search}) : setSearchParams({});
  }

  return (
    <div className={s.inputContainer}>
      <input className = {s.findInput} type="text" placeholder = 'Поиск...' value = {searchTerm} onChange = {handleSearch}/>
    </div>
  )
}
