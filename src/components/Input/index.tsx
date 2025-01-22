import {
  InputField,
  FormControlError,
  FormControlErrorText,
  Input as GlueStackInput,
  FormControl,
} from '@gluestack-ui/themed'

import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const { errorMessage = null, isReadOnly = false, ...rest } = props

  const isInvalid = !!errorMessage

  return (
    <FormControl isInvalid={isInvalid} mb={'$1'}>
      <GlueStackInput
        h={'$11'}
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
        <InputField
          px={'$4'}
          color={'$gray1'}
          fontFamily={'$body'}
          placeholderTextColor={'$4'}
          {...rest}
        />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color={'$red500'}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
