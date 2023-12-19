import { Cards } from '@/components/cards'
import { Header } from '@/components/header'
import { CardsList } from '@/features/card.reducer'

import s from './app.module.scss'

export function App() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <h1 className={s.title}>Актуальные товары игрушек</h1>
        <Cards items={CardsList} />
      </div>
    </>
  )
}
