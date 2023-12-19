import { useDispatch } from 'react-redux'

import { cardReducer } from '@/features/card.reducer'
import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**
 * обращаемся в консоли к store в любой момент
 */

// @ts-ignore
window.store = store
