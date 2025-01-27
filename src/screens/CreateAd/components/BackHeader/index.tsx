import { ArrowLeft } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, HStack, Box } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationRouteProps } from '@routes/app/types'

export const BackHeader = () => {
  const navigator = useNavigation<AppNavigationRouteProps>()

  const handleBackNavigation = () => {
    navigator.navigate('home')
  }

  return (
    <HStack
      mt={'$10'}
      w={'$full'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box position={'absolute'} left={'$0'}>
        <TouchableOpacity onPress={handleBackNavigation}>
          <Icon size={'xl'} as={ArrowLeft} color={'$gray1'} />
        </TouchableOpacity>
      </Box>
      <Text color={'$gray1'} fontFamily={'$heading'} fontSize={'$xl'}>
        Criar anúncio
      </Text>
    </HStack>
  )
}
