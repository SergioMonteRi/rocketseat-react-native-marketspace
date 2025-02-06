import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { fetchAdCreate, fetchAdSaveImages } from '@services/ad'

import { PhotoFile } from '@utils/types'

import { useCustomToast } from '@hooks/useCustomToast'

import { CreateAdFormData } from '@screens/CreateAd/types'

import { AppNavigationRouteProps } from '@routes/app/types'

export const useAd = () => {
  const { showToast } = useCustomToast()
  const navigator = useNavigation<AppNavigationRouteProps>()

  const [isLoadingCreateAd, setIsLoadingCreateAd] = useState(false)

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

  return { isLoadingCreateAd, handleCreateAd }
}
