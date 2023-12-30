import { Provider } from 'react-redux'

import { store } from '@/app/store'
import product1 from '@/assest/product-1.png'
import { Card } from '@/common/components/cards/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const OneCard: Story = {
  args: {
    cardId: 1,
    discount: '72%',
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: 843,
    picture: product1,
    price: 3022,
    rating: 4.8,
    reviewsNumber: 343,
  },
}

export const CardInBasket: Story = {
  args: {
    cardId: 1,
    defaultCard: true,
    discount: '72%',
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: 843,
    picture: product1,
    price: 3022,
    rating: 4.8,
    reviewsNumber: 343,
  },
}
