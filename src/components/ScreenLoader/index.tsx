import { Box, Center, Spinner } from '@gluestack-ui/themed'

export const ScreenLoader = () => {
  return (
    <Center
      flex={1}
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1000}
    >
      <Box
        flex={1}
        position={'absolute'}
        bg={'$gray5'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.7}
      />
      <Spinner size={32} color={'$blueLight'} zIndex={1000} />
    </Center>
  )
}
