import React, { useState } from 'react'
import s from './item.module.scss'
import Arrow from '../../img/right-arrow.svg'
import Pen from '../../img/pen.svg'
import Cross from '../../img/cross.svg'
import Doctor from '../../img/doctor.svg'
import { Button } from '../button/Button'
import { Avatar } from '../avatar/Avatar'
import { Modal } from '../modal/Modal'
import { ItemGroup } from '../itemGroup/ItemGroup'
import { useDispatch } from 'react-redux'
import { deleteAsyncDoctor } from '../../features/doctor/doctorSlice'
import { getNoun } from '../../utils/getNounFunc'
import { Link } from 'react-router-dom';


export const Item = ({doctor}) => {

    const [editModalOpen, setEditModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleEditButton = () =>{
        setEditModalOpen(true);
    }

    const handleDeleteButton = () =>{
        dispatch(deleteAsyncDoctor(doctor.id));
    }

  return (
    <div className={s.item}>
        <div className={s.itemContent}>
            <Avatar src = {doctor.photo ? doctor.photo : Doctor} alt = 'Doctor' className = 'item-avatar'/>
            <div className={s.contentText}>
                <ItemGroup valueLabel = {doctor.profession} classNameLabel = 'bigText'/>
                <ItemGroup valueItem = {doctor.fio} classNameItem = 'normalText'/>
                <ItemGroup valueLabel = 'Стаж: ' valueItem = {doctor.experience + ' ' + getNoun(doctor.experience, 'год', 'года', 'лет')} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
                <ItemGroup valueLabel = {doctor.hospital} valueItem = {doctor.address} classNameLabel = 'normalText' classNameItem = 'littleText'/>
                <ItemGroup valueLabel = 'Образование: ' valueItem = {doctor.education} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
                <ItemGroup valueLabel = 'Первичный приём: ' valueItem = {doctor.price + ' ₽'} classNameLabel = 'itemLabel' classNameItem = 'normalText'/>
            </div>
            <div className={s.contentButtons}>
                <Link to = {`/doctors/${doctor.id}`}>
                    <Button type = 'button' typeBtn = 'itemButton'>
                        <img src={Arrow} alt="SeeInfo" />
                    </Button>
                </Link>
                <Button type = 'button' typeBtn = 'itemButton' onClick={handleEditButton}>
                    <img src={Pen} alt="EditInfo" />
                </Button>
                <Button type = 'button' typeBtn = 'itemButton' onClick={handleDeleteButton}>
                    <img src={Cross} alt="DeleteInfo" />
                </Button>
            </div>
        </div>
        <Modal modalOpen = {editModalOpen} setModalOpen = {setEditModalOpen} type = 'edit-modal' doctor = {doctor}/>
    </div>
  )
}
