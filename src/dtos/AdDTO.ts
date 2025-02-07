export type AdDTO = {
  id: string
  name: string
  price: number
  is_new: boolean
  user_id: string
  is_active: boolean
  created_at: string
  updated_at: string
  description: string
  accept_trade: boolean
}

export type AdItemListDTO = {
  id: string
  name: string
  price: number
  is_new: boolean
  accept_trade: boolean
  product_images: { id: string; path: string }[]
  user: { avatar: string }
  payment_methods: { key: string; name: string }[]
}

export type AdDetailsDTO = AdItemListDTO & {
  description: string
  user: { name: string; email: string; phone: string }
}
