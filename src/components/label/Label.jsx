import React from 'react'
import s from './label.module.scss'
import cx from 'classnames';

export const Label = ({text, className}) => {

  const neededClass = (styles, labelVariants) =>
  Object.keys(labelVariants).map(key => {
    const value = labelVariants[key];
    return styles[`${value}`];
  });

  const classes = neededClass(s, {
    className, 
  });

  return (
    <label className={cx(classes)}>{text}</label>
  )
}
