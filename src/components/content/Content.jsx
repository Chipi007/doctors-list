import React from 'react'
import s from './content.module.scss'
import { Item } from '../item/Item'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDoctors } from '../../features/doctor/doctorSlice'
import { useDispatch } from 'react-redux'

export const Content = ({searchTerm}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch])

  const {doctorsList, status, error} = useSelector(state => state.doctor);
  const filterKeys = ['address', 'education', 'experience', 'fio', 'hospital', 'price', 'profession']

  const filterDoctors = (doctorsList) => {
    return doctorsList.filter(item => 
      filterKeys.some(key => item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }

  return (
    <div className={s.content}>
      <div className={s.contentTitle}>Список докторов</div>
      <div className={s.contentConatiner}>
        {filterDoctors(doctorsList) && filterDoctors(doctorsList).length > 0 ? (
          filterDoctors(doctorsList).map(doctor => (
              <Item key = {doctor.id} doctor = {doctor}/>
          ))
        ) : status === 'loading' ?<div className = {s.contentHello}>Loading...</div> 
          : error ? <div className = {s.contentHello}>Возникла ошибка. Обратитесь в службу поддержки.</div>
          : <div className = {s.contentHello}>Начните добавление информации о докторах, нажав на кнопку "Добавить"</div>}
      </div>
    </div>
  )
}

 



