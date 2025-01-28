import * as ImagePicker from 'expo-image-picker'

import { Plus, X } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import {
  Box,
  Icon,
  Text,
  Image,
  Pressable,
  ScrollView,
} from '@gluestack-ui/themed'

import { PhotoSelectorProps } from './types'

export const PhotoSelector = (props: PhotoSelectorProps) => {
  const { photosURI, setPhotosURI } = props

  const handePhotoRemove = (photoURI: string) => {
    setPhotosURI((photosURI) => photosURI.filter((photo) => photo !== photoURI))
  }

  const handleImageSelection = async () => {
    try {
      const selectedPhotos = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: 3,
      })

      if (selectedPhotos.canceled) {
        return
      }

      const selectedPhotosURI = selectedPhotos.assets.map((photo) => photo.uri)

      setPhotosURI(selectedPhotosURI)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box rowGap={'$2'}>
      <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
        Imagens
      </Text>

      <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray3'} mb={'$1'}>
        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
      </Text>

      <ScrollView
        columnGap={'$2'}
        overflow={'scroll'}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: '$2',
          columnGap: '$6',
          paddingRight: 16,
          alignItems: 'center',
        }}
        horizontal
      >
        {photosURI.map((photoURI) => (
          <Box key={photoURI}>
            <Image
              w={'$24'}
              h={'$24'}
              rounded={'$md'}
              borderWidth={1}
              alt={'Product photo'}
              borderColor={'$gray4'}
              source={{ uri: photoURI }}
            />
            <Pressable
              w={'$5'}
              h={'$5'}
              top={'$1'}
              right={'$1'}
              rounded={'$full'}
              bgColor={'$gray1'}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              onPress={() => handePhotoRemove(photoURI)}
            >
              <Icon as={X} color={'$gray7'} size={'sm'} />
            </Pressable>
          </Box>
        ))}

        <TouchableOpacity onPress={handleImageSelection}>
          <Box
            w={'$24'}
            h={'$24'}
            bg={'$gray5'}
            rounded={'$md'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Icon as={Plus} size={'xl'} color={'$gray4'} />
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  )
}
