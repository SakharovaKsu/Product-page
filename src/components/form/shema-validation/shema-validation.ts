import { z } from 'zod'

export const schemaAddress = z
  .string()
  .min(3)
  .refine(value => value, { message: 'Вы ввели неверный адрес' })
export const schemaEmail = z
  .string()
  .trim()
  .email()
  .refine(value => value, { message: 'Вы ввели неверный email' })
export const schemaTelephone = z
  .string()
  .trim()
  .refine(
    value => {
      if (!value) {
        return true
      }

      return /^[78]\d{10}$/.test(value)
    },
    { message: 'Вы вели неверный телефон' }
  )
export const schemaUserName = z
  .string()
  .min(3)
  .refine(value => value, { message: 'Вы ввели неверное имя, минимум 3 символа' })
