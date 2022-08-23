import React, { useMemo }from 'react'
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
import s from './modal.module.scss';
import Upload from '../../img/upload.svg'
import { Avatar } from '../avatar/Avatar'
import Doctor from '../../img/doctor.svg'
import { TextItem } from '../text/TextItem'
import { InputGroup } from '../inputGroup/InputGroup';
import { useState } from 'react';

export const Modal = ({type, modalOpen, setModalOpen}) => {

  const [values, setValues] = useState({});

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

  const firstInputProperties = [
    {
      id: 1,
      name: 'fio',
      typeInp: 'formInput',
      placeholder: 'Старовойтова Анастасия Ивановна',
      label: 'Фамилия Имя Отчество',
      labelClass: 'modalLabel'
    }, 
    {
      id: 2,
      name: 'profession',
      typeInp: 'formInput',
      placeholder: 'Отоларинголог',
      label: 'Специализация',
      labelClass: 'modalLabel'
    }, 
    {
      id: 3,
      name: 'hospital',
      typeInp: 'formInput',
      placeholder: 'Клиника Invitro',
      label: 'Название клиники',
      labelClass: 'modalLabel'
    }, 
    {
      id: 4,
      name: 'experience',
      typeInp: 'formInput',
      placeholder: '15',
      label: 'Cтаж',
      labelClass: 'modalLabel'
    }, 
  ]
  
  const secondInputProperties = [
    {
      id: 5,
      name: 'education',
      typeInp: 'formInput',
      placeholder: 'Тверская медицинская академия',
      label: 'Место учёбы',
      labelClass: 'modalLabel'
    }, 
    {
      id: 6,
      name: 'price',
      typeInp: 'formInput',
      placeholder: 'г. Тверь, Тверской проспект д.15',
      label: 'Адрес клиники',
      labelClass: 'modalLabel'
    }, 
    {
      id: 7,
      name: 'price',
      typeInp: 'formInput',
      placeholder: '1000',
      label: 'Цена приёма',
      labelClass: 'modalLabel'
    },
  ]

  const neededButtonText = useMemo(() => {
    return type === 'add-modal' ? 'Добавить' : 'Изменить'
  }, [type])
  
  return (
    <div>
      {modalOpen && (
        <div className={s.modal} onClick = {() => setModalOpen(false)}>
          <div className={s.modalContainer} onClick = {e => e.stopPropagation()}>
            <div className={s.modalTitle}>{neededTitle} доктора
            </div>
            {(type === 'add-modal' || type === 'edit-modal') && (
              <form action="#">
                <div className={s.formContainer}>
                  <div className={s.modalColumn}>
                  {firstInputProperties.map((input) => (
                  <InputGroup key = {input.id} {...input} value = {values[input.name]}></InputGroup>
                  )
                  )}
                    <div className={s.inputGroup}>
                      <Label text = 'Фамилия Имя Отчество' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='Старовойтова Анастасия Ивановна' name = 'name' value = '' onChange = ''/>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Специализация' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='Отоларинголог' name = 'profession' value = '' onChange = ''/>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Название клиники' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='Клиника Invitro' name = 'hospital' value = '' onChange = ''/>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Cтаж' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='15' name = 'experience' value = '' onChange = ''/>
                    </div>
                  </div>
                  <div className={s.inputGroup}>
                    <div className={s.inputGroup}>
                      <Label text = 'Фото' className='modalLabel'/>
                      <Button type = 'button' typeBtn = 'photoButton'>
                        <img src = {Upload} alt = 'upload'/>{neededButtonText} фото
                      </Button>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Место учёбы' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='Тверская медицинская академия' name = 'education' value = '' onChange = ''/>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Адрес клиники' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='г. Тверь, Тверской проспект д.15' name = 'address' value = '' onChange = ''/>
                    </div>
                    <div className={s.inputGroup}>
                      <Label text = 'Цена приёма' className='modalLabel'/>
                      <Input typeInp='formInput' placeholder='1000' name = 'price' value = '' onChange = ''/>
                    </div>
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
                  <div className={s.textGroup}>
                    <Label text = 'Фамилия Имя Отчество' className='itemLabel'/>
                    <TextItem className = 'normalText'>Скворцова Анастасия Владимировна</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Специализация' className='itemLabel'/>
                    <TextItem className = 'normalText'>Отоларинголог</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Название клиники' className='itemLabel'/>
                    <TextItem className = 'normal__text'>Клиника Invitro</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Адрес клиники' className='itemLabel'/>
                    <TextItem className = 'normalText'>г. Тверь, Тверской проспект д.15</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Стаж' className='itemLabel'/>
                    <TextItem className = 'normalText'>15 лет</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Место учёбы' className='itemLabel'/>
                    <TextItem className = 'normalText'>Тверская медицинская академия</TextItem>
                  </div>
                  <div className={s.textGroup}>
                    <Label text = 'Цена приёма' className='itemLabel'/>
                    <TextItem className = 'normalText'>1000₽</TextItem>
                  </div>
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