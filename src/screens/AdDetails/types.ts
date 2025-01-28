type PaymentMethod = 'boleto' | 'pix' | 'cash' | 'card' | 'deposit'

export type AdDetailsRouteParams = {
  adName: string
  adPrice: string
  adIsNew: boolean
  adImages: string[]
  adDescription: string
  adIsNegotiable: boolean
  adPaymentMethods: PaymentMethod[]
  isPreview?: boolean
}
