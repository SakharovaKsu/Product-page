import { Provider } from 'react-redux'

import { CardsList } from '@/app/app.slice'
import { store } from '@/app/store'
import { Cards } from '@/common/components/cards/cards'
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
