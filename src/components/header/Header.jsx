import React, { useState } from 'react'
import Logo from "../../img/logo.svg";
import { Button } from '../button/Button';
import s from "./header.module.scss";
import { Modal } from '../modal/Modal'
import { FindInput } from '../findInput/FindInput';

export const Header = ({setSearchParams, searchTerm}) => {

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
            <FindInput searchTerm= {searchTerm} setSearchParams = {setSearchParams}/>
            <Button type = 'button' typeBtn="addButton" value='add-button' onClick = {handleAddButton}>Добавить</Button>
        </div>
        <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen} type = 'add-modal'/>
    </div>
  )
}
