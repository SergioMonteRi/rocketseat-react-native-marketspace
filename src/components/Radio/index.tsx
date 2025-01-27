import {
  RadioIcon,
  RadioLabel,
  RadioGroup,
  RadioIndicator,
  Radio as GluestackRadio,
} from '@gluestack-ui/themed'

import { RadioProps } from './types'
import { Circle } from 'lucide-react-native'

export const Radio = (props: RadioProps) => {
  const { options, ...rest } = props

  return (
    <RadioGroup flexDirection={'row'} columnGap={'$6'} {...rest}>
      {options.map((option) => (
        <GluestackRadio key={option.value} value={option.value}>
          <RadioIndicator p={'$1'} borderRadius={'$full'} borderWidth={'$1'}>
            <RadioIcon
              as={Circle}
              color={'$blueLight'}
              bgColor={'$blueLight'}
            />
          </RadioIndicator>
          <RadioLabel
            ml={'$2'}
            color={'$gray2'}
            fontSize={'$md'}
            fontFamily={'$body'}
          >
            {option.label}
          </RadioLabel>
        </GluestackRadio>
      ))}
    </RadioGroup>
  )
}
