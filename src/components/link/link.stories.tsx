import { Link } from '@/components/link/link'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: Link,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/Link',
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Defaule: Story = {
  args: {
    name: 'Корзина',
    to: '/',
  },
}
