export type CardProduct = {
  discount?: string
  id: number
  nameProduct: string
  newPrice: number
  picture: string
  price?: number
  quantity: number
  rating: number
  reviewsNumber: number
}

export type UserData = {
  address: string
  email: string
  telephone: string
  userName: string
}

export type Products = {
  cardId: number
  quantity: number
}

export type Card = {
  cards: CardProduct[]
  cartItems: CardProduct[]
  totalPrice: number
  userData: UserData
}
