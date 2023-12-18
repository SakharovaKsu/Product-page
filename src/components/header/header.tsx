import Button from '@mui/material/Button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.container}>
      <p className={s.logo}>PRODUCT PAGE</p>
      <Button color={'inherit'} variant={'contained'}>
        Корзина
      </Button>
    </div>
  )
}
