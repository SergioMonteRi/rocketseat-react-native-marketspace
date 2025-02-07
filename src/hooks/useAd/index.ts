import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  fetchAdCreate,
  fetchAdDetails,
  fetchAdSaveImages,
  fetchAdsList,
} from '@services/ad'

import { PaymentMethod, PhotoFile } from '@utils/types'

import { useCustomToast } from '@hooks/useCustomToast'

import { AdDetailsDTO, AdItemListDTO } from '@dtos/AdDTO'

import { CreateAdFormData } from '@screens/CreateAd/types'

import { AppNavigationRouteProps } from '@routes/app/types'

export const useAd = () => {
  const { showToast } = useCustomToast()
  const navigator = useNavigation<AppNavigationRouteProps>()

  const [adsList, setAdsList] = useState<AdItemListDTO[]>([])
  const [adImages, setAdImages] = useState<PhotoFile[]>([])
  const [adDetails, setAdDetails] = useState<AdDetailsDTO>({} as AdDetailsDTO)
  const [paymentMethodsKeys, setPaymentMethodsKeys] = useState<PaymentMethod[]>(
    [],
  )

  const [isLoadingAdsList, setIsLoadingAdsList] = useState(false)
  const [isLoadingCreateAd, setIsLoadingCreateAd] = useState(false)
  const [isLoadingAdDetails, setIsLoadingAdDetails] = useState(false)

  const handleCreateAd = useCallback(
    async (adData: CreateAdFormData, adPhotos: PhotoFile[]) => {
      try {
        setIsLoadingCreateAd(true)

        const createAdResponse = await fetchAdCreate(adData)

        const adPhotosForm = new FormData()

        adPhotosForm.append('product_id', createAdResponse.id)

        adPhotos.forEach((photo) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          adPhotosForm.append('images', photo as any)
        })

        await fetchAdSaveImages(adPhotosForm)

        showToast({
          type: 'success',
          title: 'Anúncio criado com sucesso!',
        })

        navigator.navigate('home')
      } catch (error) {
        showToast({
          error,
          type: 'error',
          title: 'Não foi possível criar o anúncio, tente novamente mais tarde',
        })
      } finally {
        setIsLoadingCreateAd(false)
      }
    },
    [navigator, showToast],
  )

  const handleGetAdsList = useCallback(async () => {
    try {
      setIsLoadingAdsList(true)

      const adsList = await fetchAdsList()

      setAdsList(adsList)
    } catch (error) {
      showToast({
        error,
        type: 'error',
        title:
          'Não foi possível carregar os anúncios, tente novamente mais tarde',
      })
    } finally {
      setIsLoadingAdsList(false)
    }
  }, [showToast])

  const handleGetAdDetails = useCallback(
    async (adId: string) => {
      try {
        setIsLoadingAdDetails(true)

        const adDetails = await fetchAdDetails(adId)

        if (adDetails?.payment_methods) {
          const paymentMethods: PaymentMethod[] = adDetails.payment_methods.map(
            (method) => method.key as PaymentMethod,
          )

          setPaymentMethodsKeys(paymentMethods)
        }

        if (adDetails?.product_images) {
          const adImages: PhotoFile[] = adDetails.product_images.map(
            (image) => ({
              type: '',
              name: image.id,
              uri: image.path,
            }),
          )

          setAdImages(adImages)
        }

        console.log('adDetails', adDetails)

        setAdDetails(adDetails)
      } catch (error) {
        showToast({
          error,
          type: 'error',
          title:
            'Não foi possível carregar os detalhes do anúncio, tente novamente mais tarde',
        })
      } finally {
        setIsLoadingAdDetails(false)
      }
    },
    [showToast],
  )

  return {
    adsList,
    adImages,
    adDetails,
    isLoadingAdsList,
    isLoadingCreateAd,
    isLoadingAdDetails,
    paymentMethodsKeys,
    handleCreateAd,
    handleGetAdsList,
    handleGetAdDetails,
  }
}
