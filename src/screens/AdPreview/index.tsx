/* eslint-disable camelcase */
import React from 'react'
import { ArrowLeft } from 'lucide-react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Box,
  Text,
  HStack,
  Center,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed'

import { useAd } from '@hooks/useAd'
import { useAuth } from '@hooks/useAuth'

import { Button } from '@components/Button'
import { AdInfo } from '@components/Ad/AdInfo'
import { AdUserData } from '@components/Ad/AdUserData'
import { ScreenLoader } from '@components/ScreenLoader'
import { AdPaymentMethods } from '@components/Ad/AdPaymentMethods'
import { AdPhotosCarousel } from '@components/Ad/AdPhotosCarousel'

import { AppNavigationRouteProps } from '@routes/app/types'

import { AdDetailsRouteParams } from './types'

export const AdPreview = () => {
  const { isLoadingCreateAd, handleCreateAd } = useAd()

  const navigation = useNavigation<AppNavigationRouteProps>()
  const routeParams = useRoute().params as AdDetailsRouteParams
  const { adData, adImages } = routeParams

  const {
    user: { name: userName },
  } = useAuth()

  if (!adData) {
    return null
  }

  const {
    is_new,
    description,
    accept_trade,
    payment_methods,
    name: adName,
    price: formattedPrice,
  } = adData

  const handleBackToCreatAd = () => {
    navigation.navigate('createAd')
  }

  const handlePublishAd = async () => {
    adData && adImages && (await handleCreateAd(adData, adImages))
  }

  return (
    <>
      {isLoadingCreateAd && <ScreenLoader />}

      <VStack flex={1}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 128,
          }}
        >
          <VStack w={'$full'} bgColor={'$blueLight'} pt={'$16'} pb={'$4'}>
            <Center>
              <Text color={'$gray7'} fontFamily={'$heading'} fontSize={'$md'}>
                Pré visualização do anúncio
              </Text>
              <Text color={'$gray7'} fontFamily={'$body'} fontSize={'$sm'}>
                É assim que seu produto vai aparecer!
              </Text>
            </Center>
          </VStack>

          <AdPhotosCarousel adImages={adImages} />

          <Box p={'$6'} pb={'$0'} rowGap={'$2'}>
            <AdUserData name={userName} isPreview />
          </Box>

          <VStack p={'$6'} rowGap={'$2'}>
            <AdInfo
              adName={adName}
              is_new={is_new}
              description={description}
              accept_trade={accept_trade}
              formattedPrice={formattedPrice}
            />

            <AdPaymentMethods adPaymentMethods={payment_methods} />
          </VStack>
        </ScrollView>

        <HStack
          p={'$6'}
          pb={'$7'}
          bottom={0}
          bgColor={'$gray7'}
          position={'absolute'}
          columnGap={'$3'}
        >
          <Box flex={1}>
            <Button
              icon={ArrowLeft}
              title={'Voltar e editar'}
              customVariant={'secondary'}
              onPress={handleBackToCreatAd}
            />
          </Box>
          <Box flex={1}>
            <Button title={'Publicar'} onPress={handlePublishAd} />
          </Box>
        </HStack>
      </VStack>
    </>
  )
}
