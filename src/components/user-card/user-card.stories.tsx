import { Provider } from 'react-redux'

import { UserCard } from '@/components/user-card/user-card'
import { store } from '@/features/store'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: UserCard,
  decorators: [story => <Provider store={store}>{story()}</Provider>, withRouter],
  tags: ['autodocs'],
  title: 'Components/UserCard',
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const UserData: Story = {
  args: {
    address: 'Москва, ул. Озерная 23',
    email: 'nfhur@gmail.com',
    price: 354,
    telephone: '76857463388',
    userName: 'Ксения Сах',
  },
}
