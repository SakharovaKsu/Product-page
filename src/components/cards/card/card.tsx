import { FC } from 'react'
import { useSelector } from 'react-redux'

import { addItemToCart, addToCart, removeFromCart } from '@/features/card.reducer'
import { RootState, useAppDispatch } from '@/features/store'
import { StarIcon } from '@/icons/star'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'

import s from './card.module.scss'

type Props = {
  cardId: number
  defaultCard?: boolean
  discount?: string
  nameProduct: string
  newPrice: number
  picture: string
  price?: number
  rating: number
  reviewsNumber: number
}

export const Card: FC<Props> = ({
  cardId,
  defaultCard,
  discount,
  nameProduct,
  newPrice,
  picture,
  price,
  rating,
  reviewsNumber,
}) => {
  const dispatch = useAppDispatch()
  const quantityCard = useSelector(
    (state: RootState) => state.card.cards.find(card => card.id === cardId)?.quantity || 0
  )

  const classNames = {
    buttonContainer: clsx(s.buttonContainer),
    buttonQuantity: clsx(
      s.buttonQuantity,
      defaultCard ? s.buttonQuantityStart : s.buttonQuantityCenter
    ),
    container: clsx(defaultCard ? s.containerHorizontal : s.containerVertical),
    containerContent: clsx(defaultCard && s.containerContent),
    containerPrice: clsx(s.containerPrice),
    containerRating: clsx(s.containerRating),
    containerReviews: clsx(s.containerReviews),
    discount: clsx(s.discount),
    image: clsx(s.img),
    newPrice: clsx(s.newPrice, !price && s.commonPrice),
    price: clsx(s.price),
    title: clsx(s.title),
  }

  const handlerAddItemToCart = (price: number) => {
    dispatch(addItemToCart({ cardId, price }))
  }

  const handleIncreaseQuantity = (cardId: number) => {
    dispatch(addToCart({ cardId }))
  }

  const handleDecreaseQuantity = (cardId: number, price: number) => {
    if (quantityCard > 0) {
      dispatch(removeFromCart({ cardId, price }))
    }
  }

  const showQuantityButtons = quantityCard > 0 || defaultCard

  const buttonRegistration = showQuantityButtons ? (
    <div className={classNames.buttonQuantity}>
      <Button
        color={'warning'}
        onClick={() => handleDecreaseQuantity(cardId, newPrice)}
        variant={'contained'}
      >
        -
      </Button>
      <span>{quantityCard}</span>
      <Button
        color={'warning'}
        onClick={() => handleIncreaseQuantity(cardId)}
        variant={'contained'}
      >
        +
      </Button>
    </div>
  ) : (
    <Button
      color={'warning'}
      fullWidth
      onClick={() => handlerAddItemToCart(newPrice)}
      variant={'contained'}
    >
      <IconButton aria-label={'add to shopping cart'} color={'inherit'}>
        <AddShoppingCartRoundedIcon />
      </IconButton>
      купить
    </Button>
  )

  return (
    <div className={classNames.container}>
      <img alt={'Product photo.'} className={classNames.image} src={picture} />
      <div className={classNames.containerContent}>
        <div className={classNames.containerPrice}>
          <p className={classNames.newPrice}>{newPrice} ₽</p>
          {price && <p className={classNames.price}>{price} ₽</p>}
          {price && <p className={classNames.discount}>{discount}</p>}
        </div>
        <h2 className={classNames.title}>{nameProduct}</h2>
        <div className={classNames.containerReviews}>
          <div className={classNames.containerRating}>
            <StarIcon />
            <span>{rating}</span>
          </div>
          <span>{reviewsNumber} отзывов</span>
        </div>
      </div>
      <div className={classNames.buttonContainer}>{buttonRegistration}</div>
    </div>
  )
}
