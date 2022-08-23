import React from 'react'
import cx from 'classnames';
import s from "./button.module.scss"
import { neededClass } from '../../utils/util';

export const Button = ({typeBtn, children, type, onClick}) => {
  
  const classes = neededClass(s, {
    typeBtn, 
  });

  return (
    <button type = {type} className={cx(classes)} onClick = {onClick}>{children}</button>
  )
}
