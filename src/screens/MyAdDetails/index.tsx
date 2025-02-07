/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Box, VStack, ScrollView } from '@gluestack-ui/themed'

import { useAd } from '@hooks/useAd'

import { AdInfo } from '@components/Ad/AdInfo'
import { AdUserData } from '@components/Ad/AdUserData'
import { ScreenLoader } from '@components/ScreenLoader'
import { AdPaymentMethods } from '@components/Ad/AdPaymentMethods'
import { AdPhotosCarousel } from '@components/Ad/AdPhotosCarousel'

import { AdDetailsRouteParams } from './types'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const MyAdDetails = () => {
  const {
    adImages,
    adDetails,
    paymentMethodsKeys,
    isLoadingAdDetails,
    handleGetAdDetails,
  } = useAd()

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
          paddingBottom: 156,
        }}
      >
        <Header />

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

      <Footer />
    </VStack>
  )
}
