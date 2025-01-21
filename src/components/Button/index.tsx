import {
  Text,
  ButtonSpinner,
  Button as GluestackButton,
} from '@gluestack-ui/themed'

import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { title, isLoading = false, customVariant = 'primary', ...rest } = props

  const backgroundColor =
    customVariant === 'secondary'
      ? '$gray5'
      : customVariant === 'tertiary'
        ? '$gray1'
        : '$blueLight'

  const activeBackgroundColor =
    customVariant === 'secondary'
      ? '$gray4'
      : customVariant === 'tertiary'
        ? '$gray2'
        : '$blue'

  const textColor = customVariant === 'secondary' ? '$gray2' : '$gray7'

  return (
    <GluestackButton
      h={'$11'}
      w={'$full'}
      rounded={'$sm'}
      borderWidth={'$0'}
      disabled={isLoading}
      bg={backgroundColor}
      $active-bg={activeBackgroundColor}
      {...rest}
    >
      {isLoading ? <ButtonSpinner /> : <Text color={textColor}>{title}</Text>}
    </GluestackButton>
  )
}
