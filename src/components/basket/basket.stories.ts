import { Basket } from '@/components/basket/basket'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Basket,
  tags: ['autodocs'],
  title: 'Components/Basket',
} satisfies Meta<typeof Basket>

export default meta
type Story = StoryObj<typeof meta>

export const OneCard: Story = {
  args: {},
}
