import React, { useState } from 'react'
import s from './item.module.scss'
import Arrow from '../../img/right-arrow.svg'
import Pen from '../../img/pen.svg'
import Doctor from '../../img/doctor.svg'
import { Button } from '../button/Button'
import { Avatar } from '../avatar/Avatar'
import { Modal } from '../modal/Modal'
import { ItemGroup } from '../itemGroup/ItemGroup'
import { itemProperties } from '../../utils/itemObject'


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
                {itemProperties.map((item) => (
                    <ItemGroup key = {item.id} {...item}/>)
                )}
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
