import { ComponentProps } from 'react'
import { Box } from '@gluestack-ui/themed'

export type UserPhotoEditProps = ComponentProps<typeof Box> & {
  photoURI?: string | null
  updateUserProfilePhoto: () => Promise<void>
}
