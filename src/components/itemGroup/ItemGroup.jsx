import React from 'react'
import s from './itemGroup.module.scss'
import cx from 'classnames';
import { neededClass } from '../../utils/neededClass';

export const ItemGroup = ({classNameLabel, classNameItem, valueLabel, valueItem}) => {

    const classesForLabel = neededClass(s, {
        classNameLabel
    });

    const classesForItem = neededClass(s, {
        classNameItem
    });

  return (
    <div className={s.itemGroup}>
        <p className = {cx(classesForLabel)}>{valueLabel}</p>
        <p className = {cx(classesForItem)}>{valueItem}</p> 
    </div>
  )
}
