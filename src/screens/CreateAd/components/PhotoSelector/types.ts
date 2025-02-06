import { PhotoFile } from '@utils/types'

export type PhotoSelectorProps = {
  photosFile: PhotoFile[]
  setPhotosFile: React.Dispatch<React.SetStateAction<PhotoFile[]>>
}
