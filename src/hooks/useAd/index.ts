import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { fetchAdCreate, fetchAdSaveImages, fetchAdsList } from '@services/ad'

import { PhotoFile } from '@utils/types'

import { useCustomToast } from '@hooks/useCustomToast'

import { CreateAdFormData } from '@screens/CreateAd/types'

import { AppNavigationRouteProps } from '@routes/app/types'
import { AdItemListDTO } from '@dtos/AdDTO'

export const useAd = () => {
  const { showToast } = useCustomToast()
  const navigator = useNavigation<AppNavigationRouteProps>()

  const [adsList, setAdsList] = useState<AdItemListDTO[]>([])

  const [isLoadingCreateAd, setIsLoadingCreateAd] = useState(false)
  const [isLoadingAdsList, setIsLoadingAdsList] = useState(false)

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

  return {
    adsList,
    isLoadingAdsList,
    isLoadingCreateAd,
    handleCreateAd,
    handleGetAdsList,
  }
}
