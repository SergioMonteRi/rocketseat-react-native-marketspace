import { Plus } from 'lucide-react-native'
import { Box, HStack, Image, Text, VStack } from '@gluestack-ui/themed'

import { api } from '@api/api'

import { useAuth } from '@hooks/useAuth'

import { Button } from '@components/Button'

import defaultUserPhoto from '@assets/defaultUserPhoto.png'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationRouteProps } from '@routes/app/types'

export const HomeHeader = () => {
  const navigator = useNavigation<AppNavigationRouteProps>()

  const { user } = useAuth()
  const { avatar, name } = user

  const handleCreateAd = () => {
    navigator.navigate('createAd')
  }

  return (
    <HStack mt={'$10'} alignItems={'center'} columnGap={'$8'} w={'$full'}>
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

      <Box flex={1}>
        <Button
          icon={Plus}
          title={'Criar anúncio'}
          customVariant={'tertiary'}
          onPress={handleCreateAd}
        />
      </Box>
    </HStack>
  )
}
