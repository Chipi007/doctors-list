import React from 'react'
import s from './content.module.scss'
import { Item } from '../item/Item'
import { useSelector } from 'react-redux'

export const Content = ({query}) => {

  const doctorsList = useSelector(state => state.doctor.doctorsList);
  const filterKeys = ['address', 'education', 'experience', 'fio', 'hospital', 'price', 'profession']

  const filterDoctors = (doctorsList) => {
    return doctorsList.filter(item => 
      filterKeys.some(key => item[key].toLowerCase().includes(query)
      )
    )
  }

  return (
    <div className={s.content}>
      <div className={s.contentTitle}>Список докторов</div>
      <div className={s.contentConatiner}>
        {filterDoctors(doctorsList) && filterDoctors(doctorsList).length > 0 ? (
          filterDoctors(doctorsList).map(doctor => (
            <Item key = {doctor.id} {...doctor}/>
          ))
        ) : <div className = {s.contentHello}>Начните добавление информации о докторах, нажав на кнопку "Добавить"</div>}
      </div>
    </div>
  )
}

 



