import { Provider } from 'react-redux'

import { Form } from '@/components/form/form'
import { store } from '@/features/store'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: Form,
  decorators: [story => <Provider store={store}>{story()}</Provider>, withRouter],
  tags: ['autodocs'],
  title: 'Components/Form',
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Defaule: Story = {
  args: {},
}
