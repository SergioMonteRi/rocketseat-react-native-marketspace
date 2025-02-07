import {
  CheckboxIcon,
  CheckboxLabel,
  CheckboxIndicator,
  Checkbox as GluestackCheckbox,
} from '@gluestack-ui/themed'
import { CheckIcon } from 'lucide-react-native'

import { CheckboxProps } from './types'

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...rest } = props

  return (
    <GluestackCheckbox
      size="md"
      isInvalid={false}
      isDisabled={false}
      aria-label="Payment method"
      {...rest}
    >
      <CheckboxIndicator bg={'$gray7'} borderColor={'$gray4'}>
        <CheckboxIcon as={CheckIcon} color={'$gray7'} bgColor="$blueLight" />
      </CheckboxIndicator>

      <CheckboxLabel ml={'$2'} color={'$gray2'} fontSize={'$md'}>
        {label}
      </CheckboxLabel>
    </GluestackCheckbox>
  )
}
