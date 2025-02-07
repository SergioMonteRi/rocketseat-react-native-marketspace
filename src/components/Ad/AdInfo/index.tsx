/* eslint-disable camelcase */

import { Box, HStack, Text, VStack } from '@gluestack-ui/themed'

import { formatToBRLNumber } from '@utils/formatters'

import { AdInfoProps } from './types'

export const AdInfo = (props: AdInfoProps) => {
  const { adName, accept_trade, description, is_new, price } = props

  return (
    <VStack rowGap={'$2'}>
      <Box
        px={'$2'}
        py={'$1'}
        rounded={'$xl'}
        bgColor={'$gray5'}
        alignSelf={'flex-start'}
      >
        <Text fontFamily={'$heading'} fontSize={'$xs'} color={'$gray2'}>
          {is_new ? 'NOVO' : 'USADO'}
        </Text>
      </Box>

      <HStack
        mt={'$1'}
        alignItems={'baseline'}
        justifyContent={'space-between'}
      >
        <Text fontFamily={'$heading'} fontSize={'$xl'} color={'$gray1'}>
          {adName}
        </Text>
        <HStack alignItems={'baseline'}>
          <Text color={'$blueLight'} fontFamily={'$heading'}>
            R$
          </Text>
          <Text fontSize={'$xl'} color={'$blueLight'} fontFamily={'$heading'}>
            {formatToBRLNumber(price)}
          </Text>
        </HStack>
      </HStack>

      <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
        {description}
      </Text>

      <HStack columnGap={'$2'} mt={'$2'}>
        <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
          Aceita troca?
        </Text>
        <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
          {accept_trade ? 'Sim' : 'Não'}
        </Text>
      </HStack>

      <VStack rowGap={'$2'} mt={'$2'}>
        <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
          Meios de pagamento
        </Text>

        {/* <VStack columnGap={'$2'} rowGap={'$2'}>
                  <PaymentMethods adPaymentMethods={payment_methods} />
                </VStack> */}
      </VStack>
    </VStack>
  )
}
