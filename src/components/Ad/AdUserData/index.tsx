import { Text, HStack, Image } from '@gluestack-ui/themed'

import { api } from '@api/api'

import { UserProfilePhoto } from '@components/UserProfilePhoto'

import { AdUserDataProps } from './types'

export const AdUserData = (props: AdUserDataProps) => {
  const { name, avatar, isPreview = true } = props

  return (
    <HStack columnGap={'$2'} alignItems={'center'}>
      {isPreview ? (
        <UserProfilePhoto w={'$6'} h={'$6'} />
      ) : (
        <Image
          h={'$6'}
          w={'$6'}
          rounded={'$full'}
          borderWidth={'$1'}
          borderColor={'$gray7'}
          backgroundColor={'$gray5'}
          alt={'user profile photo'}
          source={{ uri: `${api.defaults.baseURL}/images/${avatar}` }}
        />
      )}

      <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray1'}>
        {name}
      </Text>
    </HStack>
  )
}
