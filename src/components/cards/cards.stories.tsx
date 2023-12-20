import { Provider } from 'react-redux'

import { Cards } from '@/components/cards/cards'
import { CardsList } from '@/features/card.reducer'
import { store } from '@/features/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Cards,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
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
