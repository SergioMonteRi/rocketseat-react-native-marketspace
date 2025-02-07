import { AdDetailsRouteParams } from './types'

export const AdDetailsMock: AdDetailsRouteParams = {
  adName: 'Bicicleta Caloi',
  adPrice: '500,00',
  adIsNew: true,
  adImages: [
    'https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  adDescription:
    'Bicicleta Caloi semi-nova, com 21 marchas e amortecedor dianteiro.',
  adIsNegotiable: true,
  adPaymentMethods: ['pix', 'card', 'boleto', 'deposit', 'cash'],
}
