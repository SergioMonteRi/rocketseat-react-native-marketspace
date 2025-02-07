import { ArrowLeft } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Icon, Text, HStack, Box } from '@gluestack-ui/themed'

import { BackHeaderProps } from './types'

export const BackHeader = (props: BackHeaderProps) => {
  const { title, onPress } = props

  const handleBackNavigation = () => {
    onPress()
  }

  return (
    <HStack
      mt={'$12'}
      h={'$12'}
      w={'$full'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box position={'absolute'} left={'$4'}>
        <TouchableOpacity onPress={handleBackNavigation}>
          <Icon size={'xl'} as={ArrowLeft} color={'$gray1'} />
        </TouchableOpacity>
      </Box>
      {!title && (
        <Text color={'$gray1'} fontFamily={'$heading'} fontSize={'$xl'}>
          {title}
        </Text>
      )}
    </HStack>
  )
}
