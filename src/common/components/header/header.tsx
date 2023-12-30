import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { RootState } from '@/app/store'
import Button from '@mui/material/Button'
import clsx from 'clsx'

import s from './header.module.scss'

export const Header = () => {
  const [showButton, setShowButton] = useState(true)
  const totalPrice = useSelector<RootState, number>(state => state.card.totalPrice)
  const location = useLocation()

  const classNames = {
    container: clsx(s.container),
    containerPrice: clsx(s.containerPrice),
    containerRating: clsx(s.containerRating),
    link: clsx(s.link),
    logo: clsx(s.logo),
    totalPrice: clsx(s.totalPrice),
  }

  const handleButtonClick = () => {
    setShowButton(!showButton)
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setShowButton(true)
    }
  }, [location])

  return (
    <div className={classNames.container}>
      <NavLink className={classNames.logo} onClick={handleButtonClick} to={'/'}>
        PRODUCT PAGE
      </NavLink>
      {showButton && (
        <div className={classNames.containerPrice}>
          {totalPrice > 0 ? (
            <NavLink
              className={classNames.link}
              onClick={handleButtonClick}
              style={{ color: 'none' }}
              to={'/basket'}
            >
              Оформить:
              <span className={classNames.totalPrice}>{totalPrice} ₽</span>
            </NavLink>
          ) : (
            <Button color={'inherit'} variant={'contained'}>
              Корзина
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
