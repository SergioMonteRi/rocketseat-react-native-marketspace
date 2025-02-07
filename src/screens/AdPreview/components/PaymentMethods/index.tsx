import {
  QrCode,
  Banknote,
  Landmark,
  DollarSign,
  CreditCard,
  LucideIcon,
} from 'lucide-react-native'
import { Icon, Text, HStack } from '@gluestack-ui/themed'

import { PaymentMethod } from '@utils/types'

import { PaymentMethodsProps } from './types'

const paymentIcons: Record<PaymentMethod, LucideIcon> = {
  boleto: Banknote,
  pix: QrCode,
  cash: DollarSign,
  card: CreditCard,
  deposit: Landmark,
}

const paymentsName: Record<PaymentMethod, string> = {
  pix: 'Pix',
  cash: 'Dinheiro',
  boleto: 'Boleto',
  card: 'Cartão de crédito',
  deposit: 'Depósito bancário',
}

export const PaymentMethods = (props: PaymentMethodsProps) => {
  const { adPaymentMethods } = props

  return adPaymentMethods.map((paymentMethod) => {
    const IconComponent = paymentIcons[paymentMethod] || Banknote
    const paymentName = paymentsName[paymentMethod]

    return (
      <HStack key={paymentMethod} columnGap={'$2'} alignItems={'center'}>
        <Icon as={IconComponent} />
        <Text color={'$gray2'} fontSize={'$sm'} fontFamily={'$body'}>
          {paymentName}
        </Text>
      </HStack>
    )
  })
}
