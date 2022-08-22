import React from 'react'
import s from './label.module.scss'
import cx from 'classnames';
import { neededClass } from '../../utils/util';

export const Label = ({text, className}) => {

  const classes = neededClass(s, {
    className, 
  });

  return (
    <label className={cx(classes)}>{text}</label>
  )
}
