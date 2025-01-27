import { ComponentProps } from 'react'
import { TextareaInput } from '@gluestack-ui/themed'

export type TextAreaProps = ComponentProps<typeof TextareaInput> & {
  isReadOnly?: boolean
  errorMessage?: string | null
}
