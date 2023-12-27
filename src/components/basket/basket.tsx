import { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Card } from '@/components/cards/card/card'
import { Form, FormValues } from '@/components/form'
import { clearCard, orderData } from '@/features/card.reducer'
import { RootState, useAppDispatch } from '@/features/store'
import { CardProduct } from '@/features/types/types'
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'

import s from './basket.module.scss'

type Props = {}

export const Basket: FC<Props> = () => {
  const cards = useSelector<RootState, CardProduct[]>(state => state.card.cartItems)
  const totalPrice = useSelector<RootState, number>(state => state.card.totalPrice)
  const dispatch = useAppDispatch()
  const classNames = {
    boxButton: clsx(s.boxButton),
    container: clsx(cards.length > 0 ? s.containerRow : s.containerColumn),
    containerBasket: clsx(s.containerBasket),
    containerCard: clsx(s.containerCard),
    link: clsx(s.link),
    price: clsx(s.price),
    title: clsx(s.title),
  }

  const clearCardHandler = () => dispatch(clearCard())

  const handleSubmit = (data: FormValues) => {
    const orderData = {
      products: cards.map(card => ({
        cardId: card.id,
        quantity: card.quantity,
      })),
      totalPrice: totalPrice,
      userInfo: {
        address: data.address,
        email: data.email,
        telephone: data.telephone,
        userName: data.userName,
      },
    }

    console.log(orderData)
    dispatch(orderData(orderData))
  }

  return (
    <div className={classNames.container}>
      {cards.length > 0 ? (
        <>
          <h1 className={classNames.title}>Оформление заказа</h1>
          <div className={classNames.containerBasket}>
            <div>
              <div className={classNames.containerCard}>
                {cards.map(card => {
                  return (
                    <Card
                      cardId={card.id}
                      defaultCard
                      discount={card.discount}
                      key={card.id}
                      nameProduct={card.nameProduct}
                      newPrice={card.newPrice}
                      picture={card.picture}
                      price={card.price}
                      rating={card.rating}
                      reviewsNumber={card.reviewsNumber}
                    />
                  )
                })}
              </div>
              <div className={classNames.boxButton}>
                <Button color={'warning'} onClick={clearCardHandler} variant={'contained'}>
                  Очистить
                  <IconButton aria-label={'add to shopping cart'} color={'inherit'}>
                    <RemoveShoppingCartRoundedIcon />
                  </IconButton>
                </Button>
                <p className={classNames.price}>{`Общая стоимость: ${totalPrice} ₽`}</p>
              </div>
            </div>
            <Form onSubmit={handleSubmit} />
          </div>
        </>
      ) : (
        <>
          <h1 className={classNames.title}>Ваша корзина пуста</h1>
          <NavLink className={classNames.link} to={'/'}>
            Перейти в каталог
          </NavLink>
        </>
      )}
    </div>
  )
}
