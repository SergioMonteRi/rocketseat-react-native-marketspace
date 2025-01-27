import {
  FormControl,
  TextareaInput,
  FormControlError,
  FormControlErrorText,
  Textarea as GlueStackTextarea,
} from '@gluestack-ui/themed'

import { TextAreaProps } from './types'

export const TextArea = (props: TextAreaProps) => {
  const { errorMessage = null, isReadOnly = false, ...rest } = props

  const isInvalid = !!errorMessage

  return (
    <FormControl isInvalid={isInvalid} mb={'$1'}>
      <GlueStackTextarea
        h={'$40'}
        pl={'$3'}
        pr={'$4'}
        w={'$full'}
        bg={'$gray7'}
        borderWidth={'$0'}
        borderRadius={'$md'}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{
          borderWidth: '$1',
          borderColor: '$red500',
        }}
        $focus={{
          borderWidth: '$1',
          borderColor: isInvalid ? '$red500' : '$gray3',
        }}
      >
        <TextareaInput
          color={'$gray1'}
          fontFamily={'$body'}
          placeholderTextColor={'$gray4'}
          {...rest}
        />
      </GlueStackTextarea>

      <FormControlError>
        <FormControlErrorText color={'$red500'}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
