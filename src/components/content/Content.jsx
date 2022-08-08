import React from 'react'
import s from './content.module.scss'
import { Item } from './item/Item'

export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.content__title}>Список докторов</div>
      <Item></Item>
    </div>
  )
}

 



