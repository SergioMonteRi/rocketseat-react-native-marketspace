import { ComponentProps } from 'react'
import { LucideIcon } from 'lucide-react-native'
import { InputField } from '@gluestack-ui/themed'

export type InputProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
  firstIcon?: LucideIcon
  secondIcon?: LucideIcon
  errorMessage?: string | null
  onPressFirstIcon?: () => void
  onPressSecondIcon?: () => void
}
