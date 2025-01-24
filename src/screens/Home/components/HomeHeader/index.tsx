import { HStack, Image, Text, VStack } from '@gluestack-ui/themed'

import { api } from '@api/api'

import { useAuth } from '@hooks/useAuth'

import { Button } from '@components/Button'

import defaultUserPhoto from '@assets/defaultUserPhoto.png'

export const HomeHeader = () => {
  const { user } = useAuth()
  const { avatar, name } = user

  return (
    <HStack mt={'$10'} alignItems={'center'} columnGap={'$8'}>
      <HStack alignItems={'center'}>
        <Image
          w={'$12'}
          h={'$12'}
          rounded={'$full'}
          borderWidth={'$2'}
          borderColor={'$blueLight'}
          backgroundColor={'$gray5'}
          alt={'user profile photo'}
          source={
            avatar
              ? { uri: `${api.defaults.baseURL}/images/${avatar}` }
              : defaultUserPhoto
          }
        />

        <VStack ml={'$3'}>
          <Text fontSize={'$md'} color={'$gray1'}>
            Boas vindas,
          </Text>
          <Text fontSize={'$md'} color={'$gray1'} fontFamily={'$heading'}>
            {name}
          </Text>
        </VStack>
      </HStack>

      <Button title={'Criar anúncio'} customVariant={'tertiary'} />
    </HStack>
  )
}
