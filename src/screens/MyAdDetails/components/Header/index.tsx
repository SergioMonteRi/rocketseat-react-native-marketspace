import { TouchableOpacity } from 'react-native'
import { Icon, HStack } from '@gluestack-ui/themed'
import { ArrowLeft, Pencil } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

import { AppNavigationRouteProps } from '@routes/app/types'

export const Header = () => {
  const navigation = useNavigation<AppNavigationRouteProps>()

  const handleBackNavigation = () => {
    navigation.navigate('myAds')
  }

  const handleEditAd = () => {}

  return (
    <HStack
      px={'$6'}
      h={'$12'}
      mt={'$12'}
      w={'$full'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <TouchableOpacity onPress={handleBackNavigation}>
        <Icon size={'xl'} as={ArrowLeft} color={'$gray1'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEditAd}>
        <Icon size={'xl'} as={Pencil} color={'$gray1'} />
      </TouchableOpacity>
    </HStack>
  )
}
