import React from 'react'
import s from './text.module.scss'
import cx from 'classnames';
import { neededClass } from '../../utils/neededClass';

export const TextItem = ({className, children}) => {

  const classes = neededClass(s, {
    className, 
  });

  return (
    <div className={cx(classes)}>{children}</div>
  )
}
