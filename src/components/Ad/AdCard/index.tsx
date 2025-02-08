/* eslint-disable camelcase */
import { TouchableOpacity } from 'react-native'
import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed'

import { api } from '@api/api'

import { formatToBRLNumber } from '@utils/formatters'

import { AdCardProps } from './types'

export const AdCard = (props: AdCardProps) => {
  const { adItem, ...rest } = props
  const { name, price, product_images, is_new, is_active, user } = adItem

  const avatar = user?.avatar

  return (
    <VStack mb={'$6'} flex={1} w={'auto'} maxWidth={'48%'}>
      <TouchableOpacity {...rest}>
        <Box>
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

            {!is_active && (
              <Box
                top={0}
                left={0}
                w={'$full'}
                h={'$full'}
                position={'absolute'}
                justifyContent={'flex-end'}
              >
                <Box
                  w={'$full'}
                  h={'$full'}
                  bg={'$gray1'}
                  opacity={0.6}
                  rounded={'$xl'}
                  position={'absolute'}
                  justifyContent={'flex-end'}
                  p={'$2'}
                />
                <Text
                  m={'$2'}
                  color={'$gray7'}
                  fontSize={'$xs'}
                  fontFamily={'$heading'}
                  textTransform={'uppercase'}
                >
                  Anúncio desativado
                </Text>
              </Box>
            )}
          </Box>

          <Box
            top={6}
            right={6}
            py={'$1'}
            px={'$2'}
            rounded={'$full'}
            position={'absolute'}
            bg={is_new ? '$blue' : '$gray2'}
          >
            <Text color={'$white'} fontSize={'$xs'} fontFamily={'$heading'}>
              {is_new ? 'NOVO' : 'USADO'}
            </Text>
          </Box>

          {avatar && (
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
          )}
        </Box>

        <Text
          mt={'$1'}
          fontSize={'$sm'}
          fontFamily={'$body'}
          color={is_active ? '$gray2' : '$gray4'}
        >
          {name}
        </Text>
        <HStack alignItems={'baseline'} columnGap={'$1'}>
          <Text
            fontSize={'$xs'}
            fontFamily={'$heading'}
            color={is_active ? '$gray1' : '$gray4'}
          >
            R$
          </Text>
          <Text
            fontSize={'$md'}
            fontFamily={'$heading'}
            color={is_active ? '$gray1' : '$gray4'}
          >
            {formatToBRLNumber(price)}
          </Text>
        </HStack>
      </TouchableOpacity>
    </VStack>
  )
}
