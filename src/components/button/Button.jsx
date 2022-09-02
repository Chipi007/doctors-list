import React from 'react'
import cx from 'classnames';
import s from "./button.module.scss"
import { neededClass } from '../../utils/neededClass';

export const Button = ({disabled, typeBtn, children, type, onClick}) => {
  
  const classes = neededClass(s, {
    typeBtn, 
  });

  return (
    <button disabled = {disabled} type = {type} className={cx(classes)} onClick = {onClick}>{children}</button>
  )
}
