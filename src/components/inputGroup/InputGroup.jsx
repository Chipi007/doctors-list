import React from 'react'
import s from './inputGroup.module.scss'

export const InputGroup = (props) => {
  const {name, value, placeholder, label, onChange} = props;
  return (
    <div className={s.inputGroup}>
        <label>{label}</label>
        <input type="text" name = {name} value = {value} placeholder={placeholder} onChange = {onChange}/>
    </div>

  )
}
