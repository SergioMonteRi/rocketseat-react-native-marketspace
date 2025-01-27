import { ArrowLeft } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, HStack, Box } from '@gluestack-ui/themed'

export const BackHeader = () => {
  return (
    <HStack
      mt={'$10'}
      w={'$full'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box position={'absolute'} left={'$0'}>
        <TouchableOpacity
          onPress={() => {
            console.log('back')
          }}
        >
          <Icon size={'xl'} as={ArrowLeft} color={'$gray1'} />
        </TouchableOpacity>
      </Box>
      <Text color={'$gray1'} fontFamily={'$heading'} fontSize={'$xl'}>
        Criar anúncio
      </Text>
    </HStack>
  )
}
