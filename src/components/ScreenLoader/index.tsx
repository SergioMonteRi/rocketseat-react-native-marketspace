import { Center, Spinner } from '@gluestack-ui/themed'

export const ScreenLoader = () => {
  return (
    <Center flex={1} bg={'$gray7'}>
      <Spinner size={32} color={'$blueLight'} />
    </Center>
  )
}
