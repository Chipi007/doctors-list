import React from 'react'
import s from './content.module.scss'
import { Item } from '../item/Item'
import { useSelector } from 'react-redux'

export const Content = () => {

  const doctorsList = useSelector(state => state.doctor.doctorsList);

  return (
    <div className={s.content}>
      <div className={s.contentTitle}>Список докторов</div>
      <div className={s.contentConatiner}>
        {doctorsList && doctorsList.length > 0 ? (
          doctorsList.map(doctor => (
            <Item key = {doctor.id} {...doctor}/>
          ))
        ) : <div className = {s.contentHello}>Начните добавление информации о докторах, нажав на кнопку "Добавить"</div>}
      </div>
    </div>
  )
}

 



