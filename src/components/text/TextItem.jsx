import React from 'react'
import s from './text.module.scss'
import cx from 'classnames';

export const TextItem = ({className, children}) => {

  const neededClass = (styles, textVariants) =>
  Object.keys(textVariants).map(key => {
    const value = textVariants[key];
    return styles[`${value}`];
  });

  const classes = neededClass(s, {
    className, 
  });


  return (
    <div className={cx(classes)}>{children}</div>
  )
}
