import { TouchableOpacity } from 'react-native'
import { MoveRight, Tag } from 'lucide-react-native'
import { Box, HStack, Icon, Text, VStack } from '@gluestack-ui/themed'

export const HomeActiveAdsCard = () => {
  return (
    <Box rowGap={'$4'}>
      <Text color={'$gray3'} fontSize={'$sm'}>
        Seus produtos anunciados para venda
      </Text>

      <HStack
        p={'$4'}
        rounded={'$md'}
        alignItems={'center'}
        bg={'$blueUltraLight'}
        justifyContent={'space-between'}
      >
        <HStack columnGap={'$4'} alignItems={'center'}>
          <Icon as={Tag} color={'$blue'} size={'lg'} />

          <VStack>
            <Text color={'$gray2'} fontSize={'$xl'} fontFamily={'$heading'}>
              4
            </Text>
            <Text color={'$gray2'} fontSize={'$sm'}>
              anúncios ativos
            </Text>
          </VStack>
        </HStack>

        <TouchableOpacity>
          <HStack alignItems={'center'} columnGap={'$2'} p={'$2'}>
            <Text fontSize={'$sm'} color={'$blue'} fontFamily={'$heading'}>
              Meus anúncios
            </Text>
            <Icon as={MoveRight} color={'$blue'} />
          </HStack>
        </TouchableOpacity>
      </HStack>
    </Box>
  )
}
