import React , { useState } from 'react'
import Logo from "../../img/logo.svg";
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import s from "./header.module.scss";
import { Modal } from '../modal/Modal';

export const Header = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () =>{
    setModalOpen(true);
  }
  
  return (
    <div className={s.header}>
        <div className={s.header__container}>
            <div className="logo__container">
                <img src={Logo} alt="Logo" />
            </div>
            <Input placeholder="Поиск..." typeInp = 'search-input'/>
            <Button type = 'button' typeBtn="add-button" openModal = {openModal}>Добавить</Button>
        </div>
        <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen} type = 'observe-modal'></Modal>
    </div>
  )
}
