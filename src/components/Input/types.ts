import { ComponentProps } from 'react'
import { InputField } from '@gluestack-ui/themed'
import { LucideIcon } from 'lucide-react-native'

export type InputProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
  firstIcon?: LucideIcon
  secondIcon?: LucideIcon
  errorMessage?: string | null
  onPressFirstIcon?: () => void
  onPressSecondIcon?: () => void
}
