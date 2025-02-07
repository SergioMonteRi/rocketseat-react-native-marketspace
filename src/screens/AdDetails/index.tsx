/* eslint-disable camelcase */
import { Phone } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Box, Text, HStack, VStack, ScrollView } from '@gluestack-ui/themed'

import { useAd } from '@hooks/useAd'

import { formatToBRLNumber } from '@utils/formatters'

import { Button } from '@components/Button'
import { AdInfo } from '@components/Ad/AdInfo'
import { BackHeader } from '@components/BackHeader'
import { AdUserData } from '@components/Ad/AdUserData'
import { ScreenLoader } from '@components/ScreenLoader'
import { AdPaymentMethods } from '@components/Ad/AdPaymentMethods'
import { AdPhotosCarousel } from '@components/Ad/AdPhotosCarousel'

import { AppNavigationRouteProps } from '@routes/app/types'

import { AdDetailsRouteParams } from './types'

export const AdDetails = () => {
  const {
    adImages,
    adDetails,
    paymentMethodsKeys,
    isLoadingAdDetails,
    handleGetAdDetails,
  } = useAd()

  const navigation = useNavigation<AppNavigationRouteProps>()
  const routeParams = useRoute().params as AdDetailsRouteParams

  const [userAdOwner, setUserAdOwner] = useState<{
    name: string
    avatar: string
  }>()

  const {
    user,
    price,
    is_new,
    description,
    accept_trade,
    name: adName,
  } = adDetails

  const handleBackToHome = () => {
    navigation.navigate('home')
  }

  useEffect(() => {
    if (user) {
      setUserAdOwner({ name: user.name, avatar: user.avatar })
    }
  }, [user])

  useEffect(() => {
    if (routeParams.adId) {
      handleGetAdDetails(routeParams.adId)
    }
  }, [handleGetAdDetails, routeParams.adId])

  if (isLoadingAdDetails) {
    return <ScreenLoader />
  }

  return (
    <VStack flex={1}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 128,
        }}
      >
        <BackHeader onPress={handleBackToHome} />

        <AdPhotosCarousel adImages={adImages} />

        <Box p={'$6'} pb={'$0'} rowGap={'$2'}>
          {userAdOwner && (
            <AdUserData name={userAdOwner.name} avatar={userAdOwner.avatar} />
          )}
        </Box>

        <VStack p={'$6'} rowGap={'$2'}>
          <AdInfo
            price={price}
            adName={adName}
            is_new={is_new}
            description={description}
            accept_trade={accept_trade}
          />

          <AdPaymentMethods adPaymentMethods={paymentMethodsKeys} />
        </VStack>
      </ScrollView>

      <HStack
        p={'$6'}
        pb={'$7'}
        bottom={0}
        bgColor={'$gray7'}
        position={'absolute'}
      >
        <Box flex={1}>
          <HStack alignItems={'flex-end'} h={'$full'} columnGap={'$1'}>
            <Text color={'$blueLight'} fontFamily={'$heading'} mb={'$1'}>
              R$
            </Text>
            <Text
              fontSize={'$2xl'}
              color={'$blueLight'}
              fontFamily={'$heading'}
            >
              {formatToBRLNumber(price)}
            </Text>
          </HStack>
        </Box>
        <Box flex={1}>
          <Button
            icon={Phone}
            title={'Entrar em contato'}
            onPress={handleBackToHome}
          />
        </Box>
      </HStack>
    </VStack>
  )
}
