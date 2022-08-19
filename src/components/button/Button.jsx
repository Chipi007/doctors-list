import React from 'react'
import cx from 'classnames';
import s from "./button.module.scss"

export const Button = ({typeBtn, children, type, onClick}) => {

  const neededClass = (styles, buttonVariants) =>
  Object.keys(buttonVariants).map(key => {
    const value = buttonVariants[key];
    return styles[`${value}`];
  });

  const classes = neededClass(s, {
    typeBtn, 
  });

  return (
    <button type = {type} className={cx(classes)} onClick = {onClick}>{children}</button>
  )
}
