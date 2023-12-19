import { useSelector } from 'react-redux'

import { RootState } from '@/features/store'
import Button from '@mui/material/Button'
import clsx from 'clsx'

import s from './header.module.scss'

export const Header = () => {
  const totalPrice = useSelector<RootState, number>(state => state.card.totalPrice)

  const classNames = {
    container: clsx(s.container),
    containerPrice: clsx(s.containerPrice),
    containerRating: clsx(s.containerRating),
    logo: clsx(s.logo),
    totalPrice: clsx(s.totalPrice),
  }

  return (
    <div className={classNames.container}>
      <p className={classNames.logo}>PRODUCT PAGE</p>
      <div className={classNames.containerPrice}>
        {totalPrice > 0 ? <span className={classNames.totalPrice}>{totalPrice} ₽</span> : ''}
        {totalPrice > 0 ? (
          <Button color={'inherit'} variant={'contained'}>
            Оформить
          </Button>
        ) : (
          <Button color={'inherit'} variant={'contained'}>
            Корзина
          </Button>
        )}
      </div>
    </div>
  )
}
