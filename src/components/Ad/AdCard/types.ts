import { ComponentProps } from 'react'
import { TouchableOpacity } from 'react-native'

import { AdItemListDTO } from '@dtos/AdDTO'

export type AdCardProps = ComponentProps<typeof TouchableOpacity> & {
  adItem: AdItemListDTO
}
