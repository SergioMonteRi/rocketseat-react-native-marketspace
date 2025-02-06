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
import { ImagesCarousel } from './components/ImagesCarousel'
import { PaymentMethods } from './components/PaymentMethods'
import { UserProfilePhoto } from '@components/UserProfilePhoto'

import { AppNavigationRouteProps } from '@routes/app/types'

import { AdDetailsRouteParams } from './types'
import { ScreenLoader } from '@components/ScreenLoader'

export const AdDetails = () => {
  const { isLoadingCreateAd, handleCreateAd } = useAd()
  const navigation = useNavigation<AppNavigationRouteProps>()
  const routeParams = useRoute().params as AdDetailsRouteParams

  const {
    user: { name },
  } = useAuth()

  const { adData, adImages, isPreview } = routeParams

  const {
    price,
    is_new,
    description,
    accept_trade,
    payment_methods,
    name: adName,
  } = adData

  const handleBackNavigation = () => {
    navigation.navigate('createAd')
  }

  const handlePublishAd = async () => {
    await handleCreateAd(adData, adImages)
  }

  return (
    <>
      {isLoadingCreateAd && <ScreenLoader />}

      <VStack>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 128,
          }}
        >
          {isPreview && (
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

        {isPreview && (
          <HStack
            p={'$6'}
            pb={'$7'}
            bottom={0}
            columnGap={'$3'}
            bgColor={'$gray7'}
            position={'absolute'}
          >
            <Box flex={1}>
              <Button
                icon={ArrowLeft}
                title={'Voltar e editar'}
                customVariant={'secondary'}
                onPress={handleBackNavigation}
              />
            </Box>
            <Box flex={1}>
              <Button title={'Publicar'} onPress={handlePublishAd} />
            </Box>
          </HStack>
        )}
      </VStack>
    </>
  )
}
