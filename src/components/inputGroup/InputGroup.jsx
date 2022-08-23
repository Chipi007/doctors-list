import React from 'react'

export const InputGroup = () => {
  return (
    <div className={s.inputGroup}>
        <label>{text}</label>
        <input type="text" placeholder={placeholder}/>
    </div>

  )
}
