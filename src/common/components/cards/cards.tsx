import { FC } from 'react'

import { Card } from '@/common/components/cards/card/card'
import { CardProduct } from '@/common/types/types'

import s from './cards.module.scss'

type Props = {
  items: CardProduct[]
}

export const Cards: FC<Props> = ({ items }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Актуальные товары игрушек</h1>
      <div className={s.containerCards}>
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
    </div>
  )
}
