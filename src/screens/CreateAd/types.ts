import { PaymentMethod } from '@utils/types'

export type CreateAdFormData = {
  name: string
  price: string
  is_new: boolean
  description: string
  accept_trade: boolean
  payment_methods: PaymentMethod[]
}
