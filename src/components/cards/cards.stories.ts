import { Cards } from '@/components/cards/cards'
import { CardsList } from '@/features/card.reducer'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Cards,
  tags: ['autodocs'],
  title: 'Components/Cards',
} satisfies Meta<typeof Cards>

export default meta
type Story = StoryObj<typeof meta>

export const ListCards: Story = {
  args: {
    items: CardsList,
  },
}
