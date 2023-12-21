import { NavLink } from 'react-router-dom'

import TextField from '@mui/material/TextField'

import s from './form.module.scss'

export const Form = () => {
  return (
    <div className={s.container}>
      <TextField
        color={'warning'}
        id={'filled-basic'}
        label={'Ваша Фамилия, Имя'}
        variant={'filled'}
      />
      <TextField
        color={'warning'}
        id={'filled-basic'}
        label={'Куда нужно отправить'}
        variant={'filled'}
      />
      <TextField color={'warning'} id={'filled-basic'} label={'Ваш телефон'} variant={'filled'} />
      <NavLink className={s.link} to={'/'}>
        Оформить
      </NavLink>
    </div>
  )
}
