import { CreateAdFormData } from '@screens/CreateAd/types'

import { PhotoFile } from '@utils/types'

export type AdDetailsRouteParams = {
  adId?: string
  isPreview?: boolean
  adImages?: PhotoFile[]
  adData?: CreateAdFormData
}
