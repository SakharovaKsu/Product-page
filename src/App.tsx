import { Route, Routes } from 'react-router-dom'

import { Basket } from '@/components/basket/basket'
import { Cards } from '@/components/cards'
import { Header } from '@/components/header'
import { UserCard } from '@/components/user-card'
import { CardsList } from '@/features/card.reducer'

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
