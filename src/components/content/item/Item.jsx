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
        <div className={s.itemContent}>
            <Avatar src = {Doctor} alt = 'Doctor' className = 'item-avatar'/>
            <div className={s.contentText}>
                <div className={s.itemGroup}>
                    <TextItem className = 'bigText'>Отоларинголог</TextItem>
                    <TextItem className = 'normalText'>Скворцова Анастасия Владимировна</TextItem>
                </div>
                <div className={s.itemGroup}>
                    <Label className = 'itemLabel' text='Стаж: '/>
                    <TextItem className = 'normalText'>16 лет</TextItem> 
                </div>
                <div className={s.itemGroup}>
                    <TextItem className = 'normalText'>Клиника 'Invitro'</TextItem>
                    <TextItem className = 'littleText'>г. Тверь, Тверской проспект, д.16</TextItem>
                </div>
                <div className={s.itemGroup}>
                    <Label className = 'itemLabel' text='Образование: '/>
                    <TextItem className = 'normalText'>Тверская государственная медицинская академия</TextItem>
                </div>
                <div className={s.itemGroup}>
                    <Label className = 'itemLabel' text='Первичный приём: '/>
                    <TextItem className = 'normalText'>1000₽</TextItem>
                </div>
            </div>
            <div className={s.contentButtons}>
                <Button type = 'button' typeBtn = 'itemButton' onClick={handleObserveButton}>
                    <img src={Arrow} alt="SeeInfo" />
                </Button>
                <Button type = 'button' typeBtn = 'itemButton' onClick={handleEditButton}>
                    <img src={Pen} alt="EditInfo" />
                </Button>
            </div>
        </div>
        <Modal modalOpen = {editModalOpen} setModalOpen = {setEditModalOpen} type = 'edit-modal'/>
        <Modal modalOpen = {observeModalOpen} setModalOpen = {setObserveModalOpen} type = 'observe-modal'/>
    </div>
  )
}
