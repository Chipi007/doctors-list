export const firstInputProperties = [
    {
      id: 1,
      name: 'fio',
      placeholder: 'Старовойтова Анастасия Ивановна',
      label: 'Фамилия Имя Отчество',
      required: true,
      pattern: '[A-Za-zЁёА-я ]{1,100}$',
      errorMessage: 'Поле может содержать только буквенные символы'
    }, 
    {
      id: 2,
      name: 'profession',
      placeholder: 'Отоларинголог',
      label: 'Специализация',
      required: true,
      pattern: '[A-Za-zЁёА-я ]{1,30}$',
      errorMessage: 'Поле может содержать только буквенные символы'
    }, 
    {
      id: 3,
      name: 'hospital',
      placeholder: 'Клиника Invitro',
      label: 'Название клиники',
      required: true,
      pattern: '[A-Za-zЁёА-я "\']{1,30}$',
      errorMessage: 'Поле может содержать только буквенные символы'
    }, 
    {
      id: 4,
      name: 'experience',
      placeholder: '15',
      label: 'Cтаж',
      required: true,
      pattern: '^[0-9]{1,2}$',
      errorMessage: 'Поле может содержать не больше двух числовых символов'
    }, 
  ]
  
  export const secondInputProperties = [
    {
      id: 5,
      name: 'education',
      placeholder: 'Тверская медицинская академия',
      label: 'Место учёбы',
      required: true,
      pattern: '[A-Za-zЁёА-я .]{1,100}$',
      errorMessage: 'Поле может содержать только буквенные символы и точку'
    }, 
    {
      id: 6,
      name: 'address',
      placeholder: 'г. Тверь, Тверской проспект д.15',
      label: 'Адрес клиники',
      required: true,
      errorMessage: 'Поле не может быть пустым'
    }, 
    {
      id: 7,
      name: 'price',
      placeholder: '1000',
      label: 'Цена приёма',
      required: true,
      pattern: '^[0-9]{1,2}$',
      errorMessage: 'Поле может содержать не больше двух числовых символов'
    },
  ]