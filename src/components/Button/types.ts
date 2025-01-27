import { ComponentProps } from 'react'
import { LucideIcon } from 'lucide-react-native'
import { Button as GluestackButton } from '@gluestack-ui/themed'

export type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string
  icon?: LucideIcon
  isLoading?: boolean
  customVariant?: 'primary' | 'secondary' | 'tertiary'
}
