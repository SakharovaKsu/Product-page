import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { z } from 'zod'

import s from './form.module.scss'

type FormValues = z.infer<typeof formSchema>
type Props = {
  disabled?: boolean
}

const formSchema = z.object({
  address: z.string().min(3),
  email: z.string().trim().email(),
  telephone: z
    .string()
    .trim()
    .refine(value => /^[78]\d{10}$/.test(value)),
  userName: z.string().min(3),
})

export const Form: FC<Props> = ({}) => {
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

  const onSubmit = (data: FormValues) => {
    // console.log(data)
  }

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
