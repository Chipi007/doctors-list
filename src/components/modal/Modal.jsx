import React, { useMemo }from 'react'
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
import s from './modal.module.scss';
import Upload from '../../img/upload.svg'
import { Avatar } from '../avatar/Avatar'
import Doctor from '../../img/doctor.svg'
import { TextItem } from '../text/TextItem';

export const Modal = ({type, modalOpen, setModalOpen}) => {

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
  
  return (
    <div className='modal'>
      {modalOpen && (
        <div className={s.modal} onClick = {() => setModalOpen(false)}>
          <div className={s.modal__container} onClick = {e => e.stopPropagation()}>
            <div className={s.modal__title}>{neededTitle} доктора
            </div>
            {(type === 'add-modal' || type === 'edit-modal') && (
              <form action="#">
                <div className={s.form__container}>
                  <div className={s.modal__column}>
                    <div className={s.input__group}>
                      <Label text = 'Фамилия Имя Отчество' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='Старовойтова Анастасия Ивановна' name = 'name' value = '' onChange = ''/>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Специализация' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='Отоларинголог' name = 'profession' value = '' onChange = ''/>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Название клиники' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='Клиника Invitro' name = 'hospital' value = '' onChange = ''/>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Cтаж' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='15' name = 'experience' value = '' onChange = ''/>
                    </div>
                  </div>
                  <div className={s.modal__column}>
                    <div className={s.input__group}>
                      <Label text = 'Фото' className='modal__label'/>
                      <Button type = 'button' typeBtn = 'photo-button'>
                        <img src = {Upload} alt = 'upload'/>{neededButtonText} фото
                      </Button>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Место учёбы' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='Тверская медицинская академия' name = 'education' value = '' onChange = ''/>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Адрес клиники' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='г. Тверь, Тверской проспект д.15' name = 'address' value = '' onChange = ''/>
                    </div>
                    <div className={s.input__group}>
                      <Label text = 'Цена приёма' className='modal__label'/>
                      <Input typeInp='form-input' placeholder='1000' name = 'price' value = '' onChange = ''/>
                    </div>
                  </div>
                </div>
                <Button type = 'submit' typeBtn = 'primary-button'>{neededButtonText}</Button>
                <Button type = 'reset' typeBtn = 'secondary-button'>Очистить</Button>
              </form>
            )}
            {type === 'observe-modal' && (
              <div className={s.observe_form__container}>
                <div className={s.modal__column}>
                  <Avatar src = {Doctor} alt = 'Doctor' className = 'item-avatar'/>
                </div>
                <div className={s.modal__column}>
                  <div className={s.text__group}>
                    <Label text = 'Фамилия Имя Отчество' className='item__label'/>
                    <TextItem className = 'normal__text'>Скворцова Анастасия Владимировна</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Специализация' className='item__label'/>
                    <TextItem className = 'normal__text'>Отоларинголог</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Название клиники' className='item__label'/>
                    <TextItem className = 'normal__text'>Клиника Invitro</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Адрес клиники' className='item__label'/>
                    <TextItem className = 'normal__text'>г. Тверь, Тверской проспект д.15</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Стаж' className='item__label'/>
                    <TextItem className = 'normal__text'>15 лет</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Место учёбы' className='item__label'/>
                    <TextItem className = 'normal__text'>Тверская медицинская академия</TextItem>
                  </div>
                  <div className={s.text__group}>
                    <Label text = 'Цена приёма' className='item__label'/>
                    <TextItem className = 'normal__text'>1000₽</TextItem>
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

