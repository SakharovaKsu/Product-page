import { FC } from 'react'

import { Card } from '@/components/cards/card/card'
import { CardProduct } from '@/features/types/types'

import s from './cards.module.scss'

type Props = {
  items: CardProduct[]
}

export const Cards: FC<Props> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map(card => (
        <Card
          cardId={card.id}
          discount={card.discount}
          key={card.id}
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
