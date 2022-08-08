import React from 'react'
import { Button } from '../../button/Button'
import { Label } from '../../label/Label'
import s from './item.module.scss'
import Arrow from '../../../img/right-arrow.svg'
import Pen from '../../../img/pen.svg'
import { Avatar } from '../../avatar/Avatar'
import Doctor from '../../../img/doctor.svg'
import { TextItem } from '../../text/TextItem'

export const Item = () => {
  return (
    <div className={s.item}>
        <div className={s.item__content}>
            <Avatar src = {Doctor} alt = 'Doctor' className = 'item-avatar'/>
            <div className={s.content__text}>
                <div className={s.item__group}>
                    <TextItem className = 'big__text'>Отоларинголог</TextItem>
                    <TextItem className = 'normal__text'>Скворцова Анастасия Владимировна</TextItem>
                </div>
                <div className={s.item__group}>
                    <Label className = 'item__label' text='Стаж: '/>
                    <TextItem className = 'normal__text'>16 лет</TextItem> 
                </div>
                <div className={s.item__group}>
                    <TextItem className = 'normal__text'>Клиника 'Invitro'</TextItem>
                    <TextItem className = 'little__text'>г. Тверь, Тверской проспект, д.16</TextItem>
                </div>
                <div className={s.item__group}>
                    <Label className = 'item__label' text='Образование: '/>
                    <TextItem className = 'normal__text'>Тверская государственная медицинская академия</TextItem>
                </div>
                <div className={s.item__group}>
                    <Label className = 'item__label' text='Первичный приём: '/>
                    <TextItem className = 'normal__text'>1000₽</TextItem>
                </div>
            </div>
            <div className={s.content__buttons}>
                <Button type = 'button' typeBtn = 'item-button'>
                    <img src={Arrow} alt="SeeInfo" />
                </Button>
                <Button type = 'button' typeBtn = 'item-button'>
                    <img src={Pen} alt="EditInfo" />
                </Button>
            </div>
        </div>
    </div>
  )
}
