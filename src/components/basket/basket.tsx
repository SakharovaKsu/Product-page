import { FC } from 'react'
import { useSelector } from 'react-redux'

import { Card } from '@/components/cards/card/card'
import { RootState } from '@/features/store'
import { CardProduct } from '@/features/types/types'

import s from './basket.module.scss'

type Props = {}

export const Basket: FC<Props> = () => {
  const cards = useSelector<RootState, CardProduct[]>(state => state.card.cartItems)

  return (
    <div className={s.container}>
      <h1 className={s.title}>Оформление заказа</h1>
      <div className={s.containerCard}>
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
    </div>
  )
}
