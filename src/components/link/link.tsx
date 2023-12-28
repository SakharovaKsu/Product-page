import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './link.module.scss'

type Props = {
  name: string
  to: string
}

export const Link: FC<Props> = ({ name, to }) => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to={to}>
        {name}
      </NavLink>
    </div>
  )
}
