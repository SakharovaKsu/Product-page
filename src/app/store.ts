import { useDispatch } from 'react-redux'

import { appSlice } from '@/app/app.slice'
import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  devTools: true,
  reducer: {
    card: appSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
