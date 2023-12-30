import product1 from '@/assest/product-1.png'
import product2 from '@/assest/product-2.png'
import product3 from '@/assest/product-3.png'
import product4 from '@/assest/product-4.png'
import product6 from '@/assest/product-6.png'
import { CardProduct, UserData } from '@/common/types/types'
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
    quantity: 0,
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
    quantity: 0,
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
    quantity: 0,
    rating: 4.8,
    reviewsNumber: 343,
  },
  {
    id: 4,
    nameProduct: 'Дракон - символ года 2024',
    newPrice: 218,
    picture: product4,
    quantity: 0,
    rating: 5,
    reviewsNumber: 118,
  },
  {
    id: 5,
    nameProduct: 'Мягкая игрушка Fancy Корги Плюша для детей 30 см ',
    newPrice: 472,
    picture: product3,
    quantity: 0,
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
    quantity: 0,
    rating: 4.8,
    reviewsNumber: 2059,
  },
]

const slice = createSlice({
  initialState: {
    cards: CardsList,
    cartItems: [] as CardProduct[],
    totalPrice: 0,
    userData: {} as UserData,
  },
  name: 'card',
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ cardId: number; price: number }>) => {
      state.totalPrice += action.payload.price
      const index = state.cards.findIndex(card => card.id === action.payload.cardId)

      if (index !== -1) {
        const updatedCard = { ...state.cards[index], quantity: state.cards[index].quantity + 1 }

        state.cards[index] = updatedCard
        state.cartItems.push(updatedCard)
      }
    },
    addToCart: (state, action: PayloadAction<{ cardId: number }>) => {
      const card = state.cards.find(card => card.id === action.payload.cardId)

      if (card) {
        const existingCartItemIndex = state.cartItems.findIndex(item => item.id === card.id)

        card.quantity += 1

        if (existingCartItemIndex !== -1) {
          state.cartItems[existingCartItemIndex].quantity += 1
        } else {
          card.quantity += 1
          state.cartItems.push(card)
        }

        state.totalPrice += card.newPrice
      }
    },
    clearCard: state => {
      state.cartItems = []
      state.totalPrice = 0
      state.cards = state.cards.map(card => ({ ...card, quantity: 0 }))
    },
    orderData: (
      state,
      action: PayloadAction<{
        products: { cardId: number; quantity: number }[]
        userInfo: UserData
      }>
    ) => {
      const { products, userInfo } = action.payload

      state.cartItems = []
      state.totalPrice = 0
      state.userData = userInfo

      products.forEach(product => {
        const card = state.cards.find(card => card.id === product.cardId)

        if (card) {
          card.quantity = product.quantity
          state.cartItems.push(card)
          state.totalPrice += card.newPrice * product.quantity
        }
      })
    },
    removeFromCart: (state, action: PayloadAction<{ cardId: number; price: number }>) => {
      const index = state.cards.findIndex(item => item.id === action.payload.cardId)

      if (index !== -1) {
        state.totalPrice -= action.payload.price

        if (index !== -1 && state.cards[index].quantity > 0) {
          state.totalPrice -= action.payload.price
          state.cards[index] = { ...state.cards[index], quantity: state.cards[index].quantity - 1 }

          if (state.cards[index].quantity === 0) {
            const cardIndexInCart = state.cartItems.findIndex(
              item => item.id === state.cards[index].id
            )

            state.cartItems.splice(cardIndexInCart, 1)
          }
        }
      }
    },
  },
})

export const appSlice = slice.reducer

export const { addItemToCart, addToCart, clearCard, orderData, removeFromCart } = slice.actions
