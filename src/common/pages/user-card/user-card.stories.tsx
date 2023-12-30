import { Provider } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { store } from '@/app/store'
import { UserCard } from '@/common/pages/user-card/user-card'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import s from './user-card.module.scss'

const meta = {
  component: UserCard,
  decorators: [story => <Provider store={store}>{story()}</Provider>, withRouter],
  tags: ['autodocs'],
  title: 'Components/UserCard',
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const UserData: Story = {
  args: {},
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Ваш заказ оформлен успешно!</h1>
        <div className={s.containerData}>
          <h2>John Doe</h2>
          <p>
            <b>Адресс доставки:</b> 123 Street, City
          </p>
          <p>
            <b>Ваш номер для связи:</b> 123-456-7890
          </p>
          <p>
            <b>Чек отправлен на</b> john.doe@example.com
          </p>
        </div>
        <div className={s.containerLink}>
          <NavLink className={s.link} to={'/'}>
            В каталог
          </NavLink>
        </div>
      </div>
    )
  },
}
