import product1 from '@/assest/product-1.png'
import product2 from '@/assest/product-2.png'
import product3 from '@/assest/product-3.png'
import product4 from '@/assest/product-4.png'
import product6 from '@/assest/product-6.png'
import { CardProduct } from '@/features/types/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type AppInitialState = ReturnType<typeof slice.getInitialState>

export const CardsList: CardProduct[] = [
  {
    discount: '72%',
    id: 1,
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: 843,
    picture: product1,
    price: 3022,
    rating: 4.8,
    reviewsNumber: 343,
  },
  {
    discount: '48%',
    id: 2,
    nameProduct: 'Мягкая игрушка-брелок аниме Летучая мышь. Белая 15 см. Кролик-летучая мышь',
    newPrice: 410,
    picture: product2,
    price: 790,
    rating: 4.8,
    reviewsNumber: 142,
  },
  {
    discount: '72%',
    id: 3,
    nameProduct: 'Мягкая игрушка Fancy Lazy cat 55 см / Длинная подушка для засыпания и сна',
    newPrice: 843,
    picture: product3,
    price: 3022,
    rating: 4.8,
    reviewsNumber: 343,
  },
  {
    id: 4,
    nameProduct: 'Дракон - символ года 2024',
    newPrice: 218,
    picture: product4,
    rating: 5,
    reviewsNumber: 118,
  },
  {
    id: 5,
    nameProduct: 'Мягкая игрушка Fancy Корги Плюша для детей 30 см ',
    newPrice: 472,
    picture: product3,
    rating: 4.5,
    reviewsNumber: 190,
  },
  {
    discount: '81%',
    id: 6,
    nameProduct: 'Плюшевая мягкая игрушка, кот-акула 35 см',
    newPrice: 484,
    picture: product6,
    price: 2500,
    rating: 4.8,
    reviewsNumber: 2059,
  },
]

const slice = createSlice({
  initialState: {
    cards: CardsList,
    totalPrice: 0,
  },
  name: 'card',
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ price: number }>) => {
      state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action) => {
      const index = state.cards.findIndex(item => item.id === action.payload.cardId)

      if (index !== -1) {
        state.totalPrice -= action.payload.price
      }
    },
  },
})

export const cardReducer = slice.reducer

export const { addItemToCart, removeFromCart } = slice.actions
