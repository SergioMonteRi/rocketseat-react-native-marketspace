import { RadioGroup } from '@gluestack-ui/themed'
import { ComponentProps } from 'react'

export type RadioProps = ComponentProps<typeof RadioGroup> & {
  options: { label: string; value: string }[]
}
