import React, { useState } from 'react'
import { Button } from '../../button/Button'
import { Label } from '../../label/Label'
import s from './item.module.scss'
import Arrow from '../../../img/right-arrow.svg'
import Pen from '../../../img/pen.svg'
import { Avatar } from '../../avatar/Avatar'
import Doctor from '../../../img/doctor.svg'
import { TextItem } from '../../text/TextItem'
import { Modal } from '../../modal/Modal'


export const Item = () => {

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [observeModalOpen, setObserveModalOpen] = useState(false); 

    const handleEditButton = () =>{
        setEditModalOpen(true);
    }

    const handleObserveButton = () =>{
        setObserveModalOpen(true);
    }

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
                <Button type = 'button' typeBtn = 'item-button' onClick={handleObserveButton}>
                    <img src={Arrow} alt="SeeInfo" />
                </Button>
                <Button type = 'button' typeBtn = 'item-button' onClick={handleEditButton}>
                    <img src={Pen} alt="EditInfo" />
                </Button>
            </div>
        </div>
        <Modal modalOpen = {editModalOpen} setModalOpen = {setEditModalOpen} type = 'edit-modal'/>
        <Modal modalOpen = {observeModalOpen} setModalOpen = {setObserveModalOpen} type = 'observe-modal'/>
    </div>
  )
}
