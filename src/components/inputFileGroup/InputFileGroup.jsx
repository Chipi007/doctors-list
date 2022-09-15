import React from 'react'
import s from './inputFileGroup.module.scss'

export const InputFileGroup = ({textBtn, handleChange, photoName}) => {
  return (
    <div className={s.inputGroup}>
        <label>Фото</label>
        <label htmlFor = 'file' className = {s.uploadButton}>{textBtn} фото</label>
        <input name = 'photo' className={s.hiddenButton} id = 'file' type = 'file' accept='image/*' onChange={e => handleChange(e)}/>
        <span className={s.span} htmlFor="file">{photoName}</span>
    </div>
  )
}
