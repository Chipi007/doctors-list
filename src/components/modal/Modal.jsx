import React, { useMemo, useState }from 'react'
import s from './modal.module.scss';
import { Button } from '../button/Button';
import { Avatar } from '../avatar/Avatar'
import { InputGroup } from '../inputGroup/InputGroup';
import { TextGroup } from '../textGroup/TextGroup';
import { firstInputProperties, secondInputProperties } from '../../utils/inputObjects';
import { textProperties } from '../../utils/textObjects';
import Upload from '../../img/upload.svg'
import Doctor from '../../img/doctor.svg'

export const Modal = ({type, modalOpen, setModalOpen}) => {

  const [values, setValues] = useState({
    fio: '',
    profession: '',
    hospital: '',
    experience: '',
    education: '',
    address: '',
    price: '',
  });

  const handleInputChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const neededTitle = useMemo(() => {
    switch (type){
      case 'add-modal':
        return 'Добавить';
      case 'edit-modal':
        return 'Изменить данные';
      case 'observe-modal':
        return 'Посмотреть данные';
      default: 
        return '';      
    }
  }, [type])

  const neededButtonText = useMemo(() => {
    return type === 'add-modal' ? 'Добавить' : 'Изменить'
  }, [type])

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleSubmit = (e) => {
    console.log(values)
    e.preventDefault();
  }
  
  return (
    <div>
      {modalOpen && (
        <div className={s.modal} onClick = {closeModal}>
          <div className={s.modalContainer} onClick = {e => e.stopPropagation()}>
            <div className={s.modalTitle}>{neededTitle} доктора</div>
            {(type === 'add-modal' || type === 'edit-modal') && (
              <form action="#" onSubmit={(e) => handleSubmit(e)}>
                <div className={s.formContainer}>
                  <div className={s.modalColumn}>
                  {firstInputProperties.map((input) => (
                    <InputGroup key = {input.id} {...input} value = {values[input.name]} onChange = {handleInputChange}/>)
                  )}
                  </div>
                  <div className={s.modalColumn}>
                    <div className={s.inputGroup}>
                      <label>Фото</label>
                      <Button type = 'button' typeBtn = 'photoButton'>
                        <img src = {Upload} alt = 'upload'/>{neededButtonText} фото
                      </Button>
                    </div>
                    {secondInputProperties.map((input) => (
                      <InputGroup key = {input.id} {...input} value = {values[input.name]} onChange = {handleInputChange}/>)
                    )}
                  </div>
                </div>
                <Button type = 'submit' typeBtn = 'primaryButton'>{neededButtonText}</Button>
                <Button type = 'reset' typeBtn = 'secondaryButton'>Очистить</Button>
              </form>
            )}
            {type === 'observe-modal' && (
              <div className={s.observeFormContainer}>
                <div className={s.modalColumn}>
                  <Avatar src = {Doctor} alt = 'Doctor' className = 'itemAvatar'/>
                </div>
                <div className={s.modalColumn}>
                  {textProperties.map((text) => (
                      <TextGroup key = {text.id} {...text}/>)
                  )}
                </div>
              </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  )
}