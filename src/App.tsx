import { Cards } from '@/components/cards'
import { CardsList } from '@/components/cards/cards.stories'
import { Header } from '@/components/header'

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
