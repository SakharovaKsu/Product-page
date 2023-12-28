import { Provider } from 'react-redux'

import product3 from '@/assest/product-3.png'
import product4 from '@/assest/product-4.png'
import product6 from '@/assest/product-6.png'
import { Basket } from '@/components/basket/basket'
import { store } from '@/features/store'
import { CardProduct } from '@/features/types/types'
import { StarIcon } from '@/icons/star'
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import s from '../cards/card/card.module.scss'
import style from './basket.module.scss'

const meta = {
  component: Basket,
  decorators: [story => <Provider store={store}>{story()}</Provider>, withRouter],
  tags: ['autodocs'],
  title: 'Components/Basket',
} satisfies Meta<typeof Basket>

export default meta
type Story = StoryObj<typeof meta>

const cardsList: CardProduct[] = [
  {
    discount: '72%',
    id: 3,
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: 843,
    picture: product3,
    price: 3022,
    quantity: 3,
    rating: 4.8,
    reviewsNumber: 343,
  },
  {
    id: 4,
    nameProduct: 'Дракон - символ года 2024',
    newPrice: 218,
    picture: product4,
    quantity: 1,
    rating: 5,
    reviewsNumber: 118,
  },
  {
    discount: '81%',
    id: 6,
    nameProduct: 'Плюшевая мягкая игрушка, кот-акула 35 см',
    newPrice: 484,
    picture: product6,
    price: 2500,
    quantity: 5,
    rating: 4.8,
    reviewsNumber: 2059,
  },
]

const cards = {
  cardsList,
  totalPrice: 777,
}

export const EmptyCart: Story = {
  args: {},
}

export const StuffedBasket: Story = {
  args: {},
  render: () => (
    <div>
      <h1 className={style.title}>Оформление заказа</h1>
      <div className={style.containerCards}>
        {cards.cardsList.map(card => {
          return (
            <div className={s.containerHorizontal} key={card.id}>
              <img alt={'Product photo.'} className={s.img} src={card.picture} />
              <div className={s.containerContent}>
                <div className={s.containerPrice}>
                  <p className={s.newPrice}>{card.newPrice} ₽</p>
                  {card.price && <p className={s.price}>{card.price} ₽</p>}
                  {card.price && <p className={s.discount}>{card.discount}</p>}
                </div>
                <h2 className={s.title}>{card.nameProduct}</h2>
                <div className={s.containerReviews}>
                  <div className={s.containerRating}>
                    <StarIcon />
                    <span>{card.rating}</span>
                  </div>
                  <span>{card.reviewsNumber} отзывов</span>
                </div>
              </div>
              <div className={s.buttonContainer}>
                <div className={s.buttonQuantity}>
                  <Button color={'warning'} variant={'contained'}>
                    -
                  </Button>
                  <span>{card.quantity}</span>
                  <Button color={'warning'} variant={'contained'}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style.boxButton}>
        <Button color={'warning'} variant={'contained'}>
          Очистить
          <IconButton aria-label={'add to shopping cart'} color={'inherit'}>
            <RemoveShoppingCartRoundedIcon />
          </IconButton>
        </Button>
        <p className={s.price}>{`${cards.totalPrice} ₽`}</p>
      </div>
    </div>
  ),
}
