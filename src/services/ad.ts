import { api } from '@api/api'

import { AdDTO, AdItemListDTO } from '@dtos/AdDTO'

import { CreateAdFormData } from '@screens/CreateAd/types'

export const fetchAdCreate = async (adData: CreateAdFormData) => {
  const adDataParsed = {
    ...adData,
    price: parseFloat(adData.price.replace(/\./g, '').replace(',', '.')),
  }

  const { data } = await api.post<AdDTO>('/products', adDataParsed)

  return data
}

export const fetchAdSaveImages = async (imagesForm: FormData) => {
  await api.post('/products/images', imagesForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const fetchAdsList = async () => {
  const { data } = await api.get<AdItemListDTO[]>('/products')

  return data
}
