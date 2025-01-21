import { Input as GlueStackInput, InputField } from '@gluestack-ui/themed'

import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const { ...rest } = props

  return (
    <GlueStackInput
      h={'$11'}
      w={'$full'}
      bg={'$gray7'}
      borderWidth={'$0'}
      borderRadius={'$md'}
      $focus={{
        borderWidth: '$1',
        borderColor: '$gray3',
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
  )
}
