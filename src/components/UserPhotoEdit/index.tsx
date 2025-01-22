import { Edit2 } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Box, Center, Icon, Image } from '@gluestack-ui/themed'

import { UserPhotoEditProps } from './types'

import defaultUserPhoto from '@assets/defaultUserPhoto.png'

export const UserPhotoEdit = (props: UserPhotoEditProps) => {
  const { photoURI, updateUserProfilePhoto } = props

  return (
    <Box>
      <Image
        alt={'user profile photo tro edit'}
        rounded={'$full'}
        borderWidth={'$2'}
        borderColor={'$blueLight'}
        backgroundColor={'$gray5'}
        source={photoURI ? { uri: photoURI } : defaultUserPhoto}
      />

      <TouchableOpacity onPress={updateUserProfilePhoto}>
        <Center
          bg={'$blueLight'}
          rounded={'$full'}
          h={'$10'}
          w={'$10'}
          borderRadius={'$full'}
          mt={'-$10'}
          ml={'$11'}
        >
          <Icon as={Edit2} color={'$gray7'} />
        </Center>
      </TouchableOpacity>
    </Box>
  )
}
