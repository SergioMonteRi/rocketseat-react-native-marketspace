import { CreateAdFormData } from '@screens/CreateAd/types'

import { PhotoFile } from '@utils/types'

export type AdDetailsRouteParams = {
  adImages: PhotoFile[]
  adData: CreateAdFormData
}
