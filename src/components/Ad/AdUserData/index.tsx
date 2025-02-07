import { Text, HStack } from '@gluestack-ui/themed'

import { UserProfilePhoto } from '@components/UserProfilePhoto'

import { AdUserDataProps } from './types'

export const AdUserData = (props: AdUserDataProps) => {
  const { name } = props

  return (
    <HStack columnGap={'$2'} alignItems={'center'}>
      <UserProfilePhoto w={'$6'} h={'$6'} />
      <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray1'}>
        {name}
      </Text>
    </HStack>
  )
}
