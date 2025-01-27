import { ComponentProps } from 'react'
import { InputField } from '@gluestack-ui/themed'

export type InputCurrencyProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
  errorMessage?: string | null
}
