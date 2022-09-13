import React, { useMemo }from 'react'
import s from './modal.module.scss';
import { Button } from '../button/Button';
import { Avatar } from '../avatar/Avatar'
import { InputGroup } from '../inputGroup/InputGroup';
import { TextGroup } from '../textGroup/TextGroup';
import { firstInputProperties, secondInputProperties } from '../../utils/inputObjects';
import { textProperties } from '../../utils/textObjects';
import Doctor from '../../img/doctor.svg'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../../features/doctor/doctorSlice';
import { v4 as uuid} from 'uuid';
import { validationSchema } from './validation';
import { InputFileGroup } from '../inputFileGroup/InputFileGroup';

const initialValues = {
  fio: '',
  profession: '',
  hospital: '',
  experience: '',
  education: '',
  address: '',
  price: '',
  photo: '',
}

export const Modal = ({type, modalOpen, setModalOpen}) => {

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addDoctor({
      id: uuid(),
      ...values,
    }
    ))
    formik.resetForm();
    closeModal();
  }

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

  const handleInputChange = async (e) => {
    const file = e.target.files;
    const data = new FormData();
    data.append('file', file[0]);
    data.append('upload_preset', 'hy0us5rz');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dxe0eimes/image/upload',{
        method: 'POST',
        body: data
      }
    )
    const files = await res.json();
    formik.setFieldValue('photo', files.secure_url);

  }

  const handleInputFileChange = (e) => {
    formik.handleChange(e); 
    handleInputChange(e)
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
                    <InputFileGroup textBtn = {neededButtonText} handleChange = {handleInputFileChange} photoName = {formik.values.photo.substring(62)}/>
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