import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { VStack, Box, Text, FlatList } from '@gluestack-ui/themed'
import { Search, SlidersVertical } from 'lucide-react-native'

import { useAd } from '@hooks/useAd'

import { AdItemListDTO } from '@dtos/AdDTO'

import { Input } from '@components/Input'
import { AdCard } from './components/AdCard'
import { HomeHeader } from './components/HomeHeader'
import { HomeActiveAdsCard } from './components/HomeActiveAdsCard'

export const Home = () => {
  const { adsList, handleGetAdsList } = useAd()

  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    await handleGetAdsList()
    setRefreshing(false)
  }

  useEffect(() => {
    handleGetAdsList()
  }, [handleGetAdsList])

  return (
    <FlatList
      data={refreshing ? [] : adsList}
      keyExtractor={(item) => (item as AdItemListDTO).id}
      renderItem={({ item }) => <AdCard adItem={item as AdItemListDTO} />}
      ListHeaderComponent={() => (
        <VStack rowGap={'$8'} mb={'$4'}>
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
      )}
      ListEmptyComponent={refreshing ? <ActivityIndicator /> : null}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      p={'$6'}
      numColumns={2}
      columnGap={20}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 64,
      }}
      columnWrapperStyle={{ justifyContent: 'space-between', columnGap: 24 }}
      showsVerticalScrollIndicator={false}
    />
  )
}
