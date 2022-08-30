import React from 'react'
import s from './inputGroup.module.scss'

export const InputGroup = ({name, value, placeholder, label, onChange, error, touched, ...inputProps}) => {
  
  return (
    <div className={s.inputGroup}>
        <label className = {s.label}>{label}</label>
        <input className = {s.input} type="text" name = {name} placeholder={placeholder} value = {value} onChange = {onChange} {...inputProps}/>
        {error && touched ? <span className = {s.span}>{error}</span> : null}
    </div>

  )
}
