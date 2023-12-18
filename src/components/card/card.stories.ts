import product1 from '@/assest/product-1.png'
import { Card } from '@/components/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Card1: Story = {
  args: {
    discount: '72%',
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: '843 ₽',
    picture: product1,
    price: '3 022 ₽',
    rating: 4.8,
    reviewsNumber: 343,
  },
}
