import { FC } from 'react'

import { StarIcon } from '@/icons/star'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'

import s from './card.module.scss'

type Props = {
  discount?: string
  nameProduct: string
  newPrice: string
  picture: string
  price?: string
  rating: number
  reviewsNumber: number
}

export const Card: FC<Props> = ({
  discount,
  nameProduct,
  newPrice,
  picture,
  price,
  rating,
  reviewsNumber,
}) => {
  const classNames = {
    buttonContainer: clsx(s.buttonContainer),
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

  return (
    <div className={classNames.container}>
      <img alt={'Product photo.'} className={classNames.image} src={picture} />
      <div className={classNames.containerPrice}>
        <p className={classNames.newPrice}>{newPrice}</p>
        {price && <p className={classNames.price}>{price}</p>}
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
        <Button color={'warning'} fullWidth variant={'contained'}>
          <IconButton aria-label={'add to shopping cart'} color={'inherit'}>
            <AddShoppingCartRoundedIcon />
          </IconButton>
          купить
        </Button>
      </div>
    </div>
  )
}
