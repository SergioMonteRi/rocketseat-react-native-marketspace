import { Switch as GluestackSwitch } from '@gluestack-ui/themed'

import { SwitchProps } from './types'

export const Switch = (props: SwitchProps) => {
  const { ...rest } = props

  return (
    <GluestackSwitch
      mt={'-$3'}
      size={'lg'}
      thumbColor={'$gray7'}
      trackColor={{
        false: '$gray5',
        true: '$blueLight',
      }}
      {...rest}
    />
  )
}
