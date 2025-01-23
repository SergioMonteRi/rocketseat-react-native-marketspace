import {
  Icon,
  Toast,
  VStack,
  Pressable,
  ToastTitle,
  ToastDescription,
} from '@gluestack-ui/themed'
import { X } from 'lucide-react-native'

import { CustomToastProps } from './types'

export const CustomToast = (props: CustomToastProps) => {
  const { id, title, description, type = 'success', onClose } = props

  return (
    <Toast
      mt={'$10'}
      action={type}
      nativeID={`toast-${id}`}
      bgColor={type === 'success' ? '$green400' : '$red400'}
    >
      <VStack space={'xs'} w={'$full'}>
        <Pressable alignSelf={'flex-end'} onPress={onClose}>
          <Icon as={X} color={'$coolGray50'} size={'md'} />
        </Pressable>

        <ToastTitle color={'$white'} fontFamily={'$heading'}>
          {title}
        </ToastTitle>

        {description && (
          <ToastDescription color={'$white'} fontFamily={'$body'}>
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  )
}
