import { FC } from 'react'

import { Card } from '@/components/cards/card/card'

import s from './cards.module.scss'

type item = {
  discount?: string
  id: number
  nameProduct: string
  newPrice: string
  picture: string
  price?: string
  rating: number
  reviewsNumber: number
}

type Props = {
  items: item[]
}

export const Cards: FC<Props> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map((card, index) => (
        <Card
          discount={card.discount}
          key={index}
          nameProduct={card.nameProduct}
          newPrice={card.newPrice}
          picture={card.picture}
          price={card.price}
          rating={card.rating}
          reviewsNumber={card.reviewsNumber}
        />
      ))}
    </div>
  )
}
