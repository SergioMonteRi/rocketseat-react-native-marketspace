import { ComponentProps } from 'react'
import { Checkbox } from '@gluestack-ui/themed'

export type CheckboxProps = ComponentProps<typeof Checkbox> & {
  label: string
}
