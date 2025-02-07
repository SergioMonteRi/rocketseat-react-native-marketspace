import { Box, VStack } from '@gluestack-ui/themed'
import { CirclePower, Trash } from 'lucide-react-native'

import { Button } from '@components/Button'

export const Footer = () => {
  return (
    <VStack
      p={'$6'}
      pb={'$7'}
      bottom={0}
      w={'$full'}
      rowGap={'$2'}
      bgColor={'$gray7'}
      position={'absolute'}
    >
      <Box flex={1}>
        <Button
          icon={CirclePower}
          customVariant={'tertiary'}
          title={'Desativar Anúncio'}
        />
      </Box>
      <Box flex={1}>
        <Button
          icon={Trash}
          title={'Excluir Anúncio'}
          customVariant={'secondary'}
        />
      </Box>
    </VStack>
  )
}
