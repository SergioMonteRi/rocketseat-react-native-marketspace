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

import { usePhoto } from '@hooks/usePhoto'

import { PhotoSelectorProps } from './types'

export const PhotoSelector = (props: PhotoSelectorProps) => {
  const { photosFile, setPhotosFile } = props

  const { handePhotoRemove, handleImageSelection } = usePhoto()

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
        {photosFile.map((photoFile) => (
          <Box key={photoFile.uri}>
            <Image
              w={'$24'}
              h={'$24'}
              rounded={'$md'}
              borderWidth={1}
              alt={'Product photo'}
              borderColor={'$gray4'}
              source={{ uri: photoFile.uri }}
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
              onPress={() => handePhotoRemove(photoFile.uri, setPhotosFile)}
            >
              <Icon as={X} color={'$gray7'} size={'sm'} />
            </Pressable>
          </Box>
        ))}

        <TouchableOpacity onPress={() => handleImageSelection(setPhotosFile)}>
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
