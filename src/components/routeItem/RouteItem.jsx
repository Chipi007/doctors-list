import React from 'react'
import { useParams } from 'react-router-dom'
import Doctor from '../../img/doctor.svg'
import { getNoun } from '../../utils/getNounFunc'
import { ItemGroup } from '../itemGroup/ItemGroup'
import s from './routeItem.module.scss'
import { useSelector } from 'react-redux'
import { Avatar } from '../avatar/Avatar'

export const RouteItem = () => {

    const doctorsList = useSelector(state => state.doctor.doctorsList);
    const {id} = useParams();
    const neededDoctor = doctorsList.find((doctor) => doctor.id === id);
    const {photo, profession, fio, experience, hospital, address, education, price} = neededDoctor;

  return (
    <div className={s.content}>
        <div className={s.contentTitle}>Данные доктора {fio}</div>
            <div className={s.contentConatiner}>
                <div className={s.item}>
                    <div className={s.itemContent}>
                        <Avatar src = {photo ? photo : Doctor} alt = 'Doctor' className = 'item-avatar'/>
                        <div className={s.contentText}>
                            <ItemGroup valueLabel = {profession} classNameLabel = 'bigText'/>
                            <ItemGroup valueItem = {fio} classNameItem = 'normalText'/>
                            <ItemGroup valueLabel = 'Стаж: ' valueItem = {experience + ' ' + getNoun(experience, 'год', 'года', 'лет')} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
                            <ItemGroup valueLabel = {hospital} valueItem = {address} classNameLabel = 'normalText' classNameItem = 'littleText'/>
                            <ItemGroup valueLabel = 'Образование: ' valueItem = {education} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
                            <ItemGroup valueLabel = 'Первичный приём: ' valueItem = {price + ' ₽'} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
                        </div>
                    </div>
                </div>
            <div/>
        </div>
    </div>
  )
}
