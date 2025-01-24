import { Search, SlidersVertical } from 'lucide-react-native'
import { VStack, ScrollView, Box, Text } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { HomeHeader } from './components/HomeHeader'
import { HomeActiveAdsCard } from './components/HomeActiveAdsCard'

export const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack p={'$6'} rowGap={'$8'}>
        <HomeHeader />

        <HomeActiveAdsCard />

        <Box rowGap={'$4'}>
          <Text color={'$gray3'} fontSize={'$sm'}>
            Compre produtos variados
          </Text>

          <Input
            placeholder={'Buscar anúncio'}
            firstIcon={Search}
            secondIcon={SlidersVertical}
          />
        </Box>
      </VStack>
    </ScrollView>
  )
}
