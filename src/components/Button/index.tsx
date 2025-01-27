import {
  Icon,
  Text,
  HStack,
  ButtonSpinner,
  Button as GluestackButton,
} from '@gluestack-ui/themed'

import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const {
    title,
    icon,
    isLoading = false,
    customVariant = 'primary',
    ...rest
  } = props

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
      rounded={'$md'}
      borderWidth={'$0'}
      disabled={isLoading}
      bg={backgroundColor}
      $active-bg={activeBackgroundColor}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <HStack columnGap={'$2'} alignItems={'center'}>
          {icon && <Icon as={icon} color={textColor} />}
          <Text color={textColor} fontFamily={'$heading'}>
            {title}
          </Text>
        </HStack>
      )}
    </GluestackButton>
  )
}
