import { Route, Routes } from 'react-router-dom'

import { CardsList } from '@/app/app.slice'
import { Cards } from '@/common/components/cards'
import { Header } from '@/common/components/header'
import { Basket } from '@/common/pages/basket/basket'
import { UserCard } from '@/common/pages/user-card'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Cards items={CardsList} />} path={'/'} />
        <Route element={<Basket />} path={'/basket'} />
        <Route element={<UserCard />} path={'/userData'} />
      </Routes>
    </>
  )
}
