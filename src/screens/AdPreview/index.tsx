/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { ArrowLeft, Phone } from 'lucide-react-native'
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

import { formatToBRLNumber } from '@utils/formatters'
import { PaymentMethod, PhotoFile } from '@utils/types'

import { Button } from '@components/Button'
import { ScreenLoader } from '@components/ScreenLoader'
import { ImagesCarousel } from './components/ImagesCarousel'
import { PaymentMethods } from './components/PaymentMethods'
import { UserProfilePhoto } from '@components/UserProfilePhoto'

import { AppNavigationRouteProps } from '@routes/app/types'

import { AdDetailsRouteParams } from './types'
import { BackHeader } from '@components/BackHeader'

export const AdPreview = () => {
  const {
    adDetails,
    isLoadingCreateAd,
    isLoadingAdDetails,
    handleCreateAd,
    handleGetAdDetails,
  } = useAd()

  const navigation = useNavigation<AppNavigationRouteProps>()
  const routeParams = useRoute().params as AdDetailsRouteParams

  const {
    user: { name },
  } = useAuth()

  const [adData, setAdData] = useState(routeParams.adData || null)
  const [adImages, setAdImages] = useState(routeParams.adImages || [])

  console.log('adData', adDetails?.product_images)

  useEffect(() => {
    if (routeParams.adId && !routeParams.adData) {
      handleGetAdDetails(routeParams.adId)
    }
  }, [handleGetAdDetails, routeParams.adData, routeParams.adId])

  useEffect(() => {
    if (adDetails) {
      const payment_methods: PaymentMethod[] = adDetails.payment_methods.map(
        (method) => method.key as PaymentMethod,
      )

      const adImages: PhotoFile[] = adDetails.product_images.map((image) => ({
        type: '',
        name: image.id,
        uri: image.path,
      }))

      setAdData({
        payment_methods,
        name: adDetails.name,
        is_new: adDetails.is_new,
        description: adDetails.description,
        accept_trade: adDetails.accept_trade,
        price: formatToBRLNumber(adDetails.price),
      })

      setAdImages(adImages)
    }
  }, [adDetails])

  if (!adData) {
    return null
  }

  const {
    price,
    is_new,
    description,
    accept_trade,
    payment_methods,
    name: adName,
  } = adData

  const handleBackToCreatAd = () => {
    navigation.navigate('createAd')
  }

  const handleBackToHome = () => {
    navigation.navigate('home')
  }

  const handlePublishAd = async () => {
    adData && adImages && (await handleCreateAd(adData, adImages))
  }

  return (
    <>
      {(isLoadingCreateAd || isLoadingAdDetails) && <ScreenLoader />}

      <VStack flex={1}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 128,
          }}
        >
          {routeParams.isPreview ? (
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
          ) : (
            <BackHeader onPress={handleBackToHome} />
          )}

          <ImagesCarousel adImages={adImages} />

          <VStack p={'$6'} rowGap={'$6'}>
            <HStack columnGap={'$2'} alignItems={'center'}>
              <UserProfilePhoto w={'$6'} h={'$6'} />
              <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray1'}>
                {name}
              </Text>
            </HStack>

            <VStack rowGap={'$2'}>
              <Box
                px={'$2'}
                py={'$1'}
                rounded={'$xl'}
                bgColor={'$gray5'}
                alignSelf={'flex-start'}
              >
                <Text fontFamily={'$heading'} fontSize={'$xs'} color={'$gray2'}>
                  {is_new ? 'NOVO' : 'USADO'}
                </Text>
              </Box>

              <HStack
                mt={'$1'}
                alignItems={'baseline'}
                justifyContent={'space-between'}
              >
                <Text fontFamily={'$heading'} fontSize={'$xl'} color={'$gray1'}>
                  {adName}
                </Text>
                <HStack alignItems={'baseline'}>
                  <Text color={'$blueLight'} fontFamily={'$heading'}>
                    R$
                  </Text>
                  <Text
                    fontSize={'$xl'}
                    color={'$blueLight'}
                    fontFamily={'$heading'}
                  >
                    {price}
                  </Text>
                </HStack>
              </HStack>

              <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
                {description}
              </Text>

              <HStack columnGap={'$2'} mt={'$2'}>
                <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
                  Aceita troca?
                </Text>
                <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
                  {accept_trade ? 'Sim' : 'Não'}
                </Text>
              </HStack>

              <VStack rowGap={'$2'} mt={'$2'}>
                <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
                  Meios de pagamento
                </Text>

                <VStack columnGap={'$2'} rowGap={'$2'}>
                  <PaymentMethods adPaymentMethods={payment_methods} />
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>

        <HStack
          p={'$6'}
          pb={'$7'}
          bottom={0}
          bgColor={'$gray7'}
          position={'absolute'}
          columnGap={routeParams.isPreview ? '$3' : '$0'}
        >
          <Box flex={1}>
            {routeParams.isPreview ? (
              <Button
                icon={ArrowLeft}
                title={'Voltar e editar'}
                customVariant={'secondary'}
                onPress={handleBackToCreatAd}
              />
            ) : (
              <HStack alignItems={'flex-end'} h={'$full'} columnGap={'$1'}>
                <Text color={'$blueLight'} fontFamily={'$heading'} mb={'$1'}>
                  R$
                </Text>
                <Text
                  fontSize={'$2xl'}
                  color={'$blueLight'}
                  fontFamily={'$heading'}
                >
                  {price}
                </Text>
              </HStack>
            )}
          </Box>
          <Box flex={1}>
            {routeParams.isPreview ? (
              <Button title={'Publicar'} onPress={handlePublishAd} />
            ) : (
              <Button
                icon={Phone}
                title={'Entrar em contato'}
                onPress={handleBackToHome}
              />
            )}
          </Box>
        </HStack>
      </VStack>
    </>
  )
}
