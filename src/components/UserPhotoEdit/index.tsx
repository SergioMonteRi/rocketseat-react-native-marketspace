import { Edit2 } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Box, Center, Icon, Image } from '@gluestack-ui/themed'

import * as ImagePicker from 'expo-image-picker'

import defaultUserPhoto from '@assets/defaultUserPhoto.png'
import { useState } from 'react'

export const UserPhotoEdit = () => {
  const [photoURI, setPhotoURI] = useState<string | null>(null)

  const updateUserProfilePhoto = async () => {
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        mediaTypes: ['images'],
      })

      if (selectedPhoto.canceled) {
        return
      }

      const photoURI = selectedPhoto.assets[0].uri

      setPhotoURI(photoURI)

      console.log('photoURI', photoURI)
    } catch (error) {
      console.log(error)
    }
  }

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
