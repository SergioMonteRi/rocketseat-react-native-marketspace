/* eslint-disable camelcase */
import { TouchableOpacity } from 'react-native'
import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed'

import { api } from '@api/api'

import { formatToBRLNumber } from '@utils/formatters'

import { AdCardProps } from './types'

export const AdCard = (props: AdCardProps) => {
  const { adItem, ...rest } = props
  const { name, price, product_images, is_new, user } = adItem
  const { avatar } = user

  return (
    <VStack mb={'$6'} flex={1} w={'auto'} maxWidth={'48%'}>
      <TouchableOpacity {...rest}>
        <Box>
          <Image
            w={'$full'}
            h={'$28'}
            rounded={'$xl'}
            backgroundColor={'$gray5'}
            alt={'product image'}
            source={{
              uri: `${api.defaults.baseURL}/images/${product_images[0]?.path}`,
            }}
          />

          <Box
            position={'absolute'}
            top={6}
            right={6}
            py={'$1'}
            px={'$2'}
            bg={is_new ? '$blue' : '$gray2'}
            rounded={'$full'}
          >
            <Text color={'$white'} fontSize={'$xs'} fontFamily={'$heading'}>
              {is_new ? 'NOVO' : 'USADO'}
            </Text>
          </Box>

          <Image
            position={'absolute'}
            h={'$6'}
            w={'$6'}
            top={6}
            left={6}
            rounded={'$full'}
            borderWidth={'$1'}
            borderColor={'$gray7'}
            backgroundColor={'$gray5'}
            alt={'user profile photo'}
            source={{ uri: `${api.defaults.baseURL}/images/${avatar}` }}
          />
        </Box>

        <Text color={'$gray2'} fontSize={'$sm'} fontFamily={'$body'} mt={'$1'}>
          {name}
        </Text>
        <HStack alignItems={'baseline'} columnGap={'$1'}>
          <Text color={'$gray1'} fontSize={'$xs'} fontFamily={'$heading'}>
            R$
          </Text>
          <Text color={'$gray1'} fontSize={'$md'} fontFamily={'$heading'}>
            {formatToBRLNumber(price)}
          </Text>
        </HStack>
      </TouchableOpacity>
    </VStack>
  )
}
