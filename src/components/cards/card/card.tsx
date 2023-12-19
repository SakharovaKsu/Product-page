import { FC, useState } from 'react'

import { addItemToCart, removeFromCart } from '@/features/card.reducer'
import { useAppDispatch } from '@/features/store'
import { StarIcon } from '@/icons/star'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'

import s from './card.module.scss'

type Props = {
  cardId: number
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
  discount,
  nameProduct,
  newPrice,
  picture,
  price,
  rating,
  reviewsNumber,
}) => {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState<number>(0)

  const classNames = {
    buttonContainer: clsx(s.buttonContainer),
    buttonQuantity: clsx(s.buttonQuantity),
    container: clsx(s.container),
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
    setQuantity(1)
    dispatch(addItemToCart({ price }))
  }

  const handleIncreaseQuantity = (price: number) => {
    dispatch(addItemToCart({ price }))
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleDecreaseQuantity = (cardId: number, price: number) => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      dispatch(removeFromCart({ cardId, price }))
    }
  }

  return (
    <div className={classNames.container}>
      <img alt={'Product photo.'} className={classNames.image} src={picture} />
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
      <div className={classNames.buttonContainer}>
        {quantity >= 1 ? (
          <div className={classNames.buttonQuantity}>
            <Button
              color={'warning'}
              onClick={() => handleDecreaseQuantity(cardId, newPrice)}
              variant={'contained'}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              color={'warning'}
              onClick={() => handleIncreaseQuantity(newPrice)}
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
        )}
      </div>
    </div>
  )
}
