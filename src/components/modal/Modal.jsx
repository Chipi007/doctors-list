import React, { useMemo }from 'react'
import s from './modal.module.scss';
import { Button } from '../button/Button';
import { Avatar } from '../avatar/Avatar'
import { InputGroup } from '../inputGroup/InputGroup';
import { TextGroup } from '../textGroup/TextGroup';
import { firstInputProperties, secondInputProperties } from '../../utils/inputObjects';
import { textProperties } from '../../utils/textObjects';
import Upload from '../../img/upload.svg'
import Doctor from '../../img/doctor.svg'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LettersError = 'Поле может содержать не меньше 5 буквенных символов';
const emptyError = 'Поле не может быть пустым';
const NumbersError = 'Поле может содержать не больше 5 числовых символов'
const LettersAndPointError = 'Поле может содеражть не меньше 5 буквенных символов и кавычек'

const initialValues = {
  fio: '',
  profession: '',
  hospital: '',
  experience: '',
  education: '',
  address: '',
  price: '',
}

const onSubmit = (values) => {
}

const validationSchema = Yup.object({
  fio: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
  profession: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
  hospital: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
  experience: Yup.string().matches(/^(\d){1,5}$/g, NumbersError).required(emptyError),
  education: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersAndPointError).required(emptyError),
  address: Yup.string().required(emptyError),
  price: Yup.string().matches(/^(\d){1,5}$/g, NumbersError).required(emptyError)
})

export const Modal = ({type, modalOpen, setModalOpen}) => {

const formik = useFormik({
  initialValues,
  onSubmit,
  validationSchema
})

const resetForm = (e) => {
  formik.resetForm()
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

  return (
    <div>
      {modalOpen && (
        <div className={s.modal} onClick = {closeModal}>
          <div className={s.modalContainer} onClick = {e => e.stopPropagation()}>
            <div className={s.modalTitle}>{neededTitle} доктора</div>
            {(type === 'add-modal' || type === 'edit-modal') && (
              <form action="#" onSubmit={formik.handleSubmit}>
                <div className={s.formContainer}>
                  <div className={s.modalColumn}>
                  {firstInputProperties.map((input) => (
                    <InputGroup key = {input.id} {...input} value = {formik.values[input.name]} onChange = {formik.handleChange} error = {formik.errors[input.name]} touched = {formik.touched[input.name]} onBlur = {formik.handleBlur}/>)
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
                      <InputGroup key = {input.id} {...input} value = {formik.values[input.name]} onChange = {formik.handleChange} error = {formik.errors[input.name]} touched = {formik.touched[input.name]} onBlur = {formik.handleBlur}/>)
                    )}
                  </div>
                </div>
                <Button type = 'submit' typeBtn = 'primaryButton' disabled = {!(formik.dirty && formik.isValid)}>{neededButtonText}</Button>
                <Button type = 'reset' typeBtn = 'secondaryButton' onClick= {(e) => resetForm(e)}>Очистить</Button>
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