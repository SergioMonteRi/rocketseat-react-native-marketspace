import { AdItemListDTO } from '@dtos/AdDTO'
import { ComponentProps } from 'react'
import { TouchableOpacity } from 'react-native'

export type AdCardProps = ComponentProps<typeof TouchableOpacity> & {
  adItem: AdItemListDTO
}
