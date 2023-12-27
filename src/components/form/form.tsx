import { FC } from 'react'
import { useForm } from 'react-hook-form'

import {
  schemaAddress,
  schemaEmail,
  schemaTelephone,
  schemaUserName,
} from '@/components/form/shema-validation/shema-validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { z } from 'zod'

import s from './form.module.scss'

export type FormValues = z.infer<typeof formSchema>
type Props = {
  disabled?: boolean
  onSubmit: (data: FormValues) => void
}

const formSchema = z.object({
  address: schemaAddress,
  email: schemaEmail,
  telephone: schemaTelephone,
  userName: schemaUserName,
})

export const Form: FC<Props> = ({ onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      address: '',
      email: '',
      telephone: '',
      userName: '',
    },
    resolver: zodResolver(formSchema),
  })

  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('userName')}
        color={'warning'}
        error={!!errors.userName?.message}
        helperText={errors.userName?.message}
        id={'userName'}
        label={'Ваша Фамилия, Имя'}
        variant={'filled'}
      />
      <TextField
        {...register('address')}
        color={'warning'}
        error={!!errors.address?.message}
        helperText={errors.address?.message}
        id={'address'}
        label={'Куда нужно отправить?'}
        variant={'filled'}
      />
      <TextField
        {...register('telephone')}
        color={'warning'}
        error={!!errors.telephone?.message}
        helperText={errors.telephone?.message}
        id={'telephone'}
        label={'+7(000)000-00-00'}
        variant={'filled'}
      />
      <TextField
        {...register('email')}
        color={'warning'}
        error={!!errors.email?.message}
        id={'email'}
        label={'Email'}
        variant={'filled'}
      />
      <Button color={'warning'} fullWidth type={'submit'} variant={'contained'}>
        Оформить
      </Button>
    </form>
  )
}
