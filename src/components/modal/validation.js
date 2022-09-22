import * as Yup from 'yup';

const LettersError = 'Введите не меньше 5 буквенных символов';
const emptyError = 'Поле не может быть пустым';
const NumbersError5 = 'Введите не больше 5 числовых символов';
const NumbersError2 = 'Введите не больше 2 числовых символов';

export const validationSchema = Yup.object({
    fio: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
    profession: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
    hospital: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
    experience: Yup.string().matches(/^(\d){1,2}$/g, NumbersError2).required(emptyError),
    education: Yup.string().matches(/^([A-Za-zЁёА-я ]){5,50}$/, LettersError).required(emptyError),
    address: Yup.string().required(emptyError),
    price: Yup.string().matches(/^(\d){1,5}$/g, NumbersError5).required(emptyError)
})