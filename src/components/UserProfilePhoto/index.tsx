import { Image } from '@gluestack-ui/themed'

import { useAuth } from '@hooks/useAuth'

import { api } from '@api/api'

import defaultUserPhoto from '@assets/defaultUserPhoto.png'
import { UserProfilePhotoProps } from './types'

export const UserProfilePhoto = ({ ...rest }: UserProfilePhotoProps) => {
  const { user } = useAuth()
  const { avatar } = user

  return (
    <Image
      {...rest}
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
  )
}
