import {
  InputSlot,
  InputIcon,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GlueStackInput,
  Divider,
  Box,
} from '@gluestack-ui/themed'

import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const {
    firstIcon,
    secondIcon,
    errorMessage = null,
    isReadOnly = false,
    onPressFirstIcon,
    onPressSecondIcon,
    ...rest
  } = props

  const isInvalid = !!errorMessage

  return (
    <FormControl isInvalid={isInvalid} mb={'$1'}>
      <GlueStackInput
        h={'$11'}
        w={'$full'}
        bg={'$gray7'}
        pl={'$3'}
        pr={'$4'}
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
          color={'$gray1'}
          fontFamily={'$body'}
          placeholderTextColor={'$gray4'}
          {...rest}
        />

        {firstIcon && (
          <InputSlot onPress={onPressFirstIcon}>
            <InputIcon color={'$gray4'} as={firstIcon} />
          </InputSlot>
        )}

        {firstIcon && secondIcon && (
          <Box py={'$3'}>
            <Divider orientation={'vertical'} mx={'$2'} />
          </Box>
        )}

        {secondIcon && (
          <InputSlot onPress={onPressSecondIcon}>
            <InputIcon color={'$gray4'} as={secondIcon} />
          </InputSlot>
        )}
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color={'$red500'}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
