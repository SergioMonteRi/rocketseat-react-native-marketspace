import { api } from '@api/api'

import { AdDTO } from '@dtos/AdDTO'

import { CreateAdFormData } from '@screens/CreateAd/types'

export const fetchAdCreate = async (adData: CreateAdFormData) => {
  const adDataParsed = {
    ...adData,
    price: parseFloat(adData.price.replace(/\./g, '').replace(',', '.')),
  }

  console.log('ad data parsed', adDataParsed)

  const { data } = await api.post<AdDTO>('/products', adDataParsed)

  return data
}

export const fetchAdSaveImages = async (imagesForm: FormData) => {
  console.log('images form', imagesForm)

  await api.post('/products/images', imagesForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
