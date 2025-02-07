import { Plus } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Icon,
  Text,
  HStack,
  VStack,
  FlatList,
  Pressable,
} from '@gluestack-ui/themed'

import { useAd } from '@hooks/useAd'

import { AdDetailsDTO } from '@dtos/AdDTO'

import { AdCard } from '@components/Ad/AdCard'
import { AppNavigationRouteProps } from '@routes/app/types'

export const MyAds = () => {
  const navigator = useNavigation<AppNavigationRouteProps>()
  const { userAdsList, handleGetUserAdsList } = useAd()

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleMyAdDetailsNavigation = (ad: AdDetailsDTO) => {
    navigator.navigate('myAdDetails', { adId: ad.id })
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    await handleGetUserAdsList()
    setIsRefreshing(false)
  }

  useEffect(() => {
    handleGetUserAdsList()
  }, [handleGetUserAdsList])

  return (
    <FlatList
      data={isRefreshing ? [] : userAdsList}
      keyExtractor={(item) => (item as AdDetailsDTO).id}
      renderItem={({ item }) => (
        <AdCard
          adItem={item as AdDetailsDTO}
          onPress={() => handleMyAdDetailsNavigation(item as AdDetailsDTO)}
        />
      )}
      ListHeaderComponent={() => (
        <VStack rowGap={'$4'} mt={'$10'}>
          <HStack justifyContent={'center'} alignItems={'center'}>
            <Text color={'$gray1'} fontSize={'$xl'} fontFamily={'$heading'}>
              Meus anúncios
            </Text>

            <Pressable position={'absolute'} right={0} onPress={() => {}}>
              <Icon as={Plus} size={'xl'} />
            </Pressable>
          </HStack>

          <HStack mt={'$2'} mb={'$6'}>
            <Text color={'$gray2'} fontSize={'$sm'}>
              {userAdsList.length} anúncios
            </Text>
          </HStack>
        </VStack>
      )}
      ListEmptyComponent={isRefreshing ? <ActivityIndicator /> : null}
      numColumns={2}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      showsVerticalScrollIndicator={false}
      p={'$6'}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 64,
      }}
      columnWrapperStyle={{ justifyContent: 'space-between', columnGap: 20 }}
    />
  )
}
