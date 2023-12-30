import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { clearCard, orderData } from '@/app/app.slice'
import { RootState, useAppDispatch } from '@/app/store'
import { Card } from '@/common/components/cards/card/card'
import { Form, FormValues } from '@/common/components/form'
import { Link } from '@/common/components/link'
import { CardProduct } from '@/common/types/types'
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
  const navigate = useNavigate()
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
    const orderDataProducts = {
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

    localStorage.setItem('cartItems', JSON.stringify(orderDataProducts))
    dispatch(orderData(orderDataProducts))
    dispatch(clearCard())
    navigate('/userData')
  }

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems')

    if (savedCartItems) {
      dispatch(orderData(JSON.parse(savedCartItems)))
    }
  }, [dispatch])

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
          <Link name={'Перейти в каталог'} to={'/'} />
        </>
      )}
    </div>
  )
}
