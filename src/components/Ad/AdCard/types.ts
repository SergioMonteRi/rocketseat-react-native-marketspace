import { ComponentProps } from 'react'
import { TouchableOpacity } from 'react-native'

import { AdDetailsDTO } from '@dtos/AdDTO'

export type AdCardProps = ComponentProps<typeof TouchableOpacity> & {
  adItem: AdDetailsDTO
}
