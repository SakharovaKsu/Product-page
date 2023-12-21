import { Provider } from 'react-redux'

import { Header } from '@/components/header/header'
import { store } from '@/features/store'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: Header,
  decorators: [story => <Provider store={store}>{story()}</Provider>, withRouter],
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DesktopWithButton: Story = {
  args: {},
}
