import React, { useState } from 'react'
import Logo from "../../img/logo.svg";
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import s from "./header.module.scss";
import { Modal } from '../modal/Modal'

export const Header = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleAddButton = () => {
    setModalOpen(true);
  }
  
  return (
    <div className={s.header}>
        <div className={s.headerContainer}>
            <div className={s.logoContainer}>
                <img src={Logo} alt="Logo" />
            </div>
            <Input placeholder="Поиск..." typeInp = 'searchInput'/>
            <Button type = 'button' typeBtn="addButton" value='add-button' onClick = {handleAddButton}>Добавить</Button>
        </div>
        <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen} type = 'add-modal'/>
    </div>
  )
}
