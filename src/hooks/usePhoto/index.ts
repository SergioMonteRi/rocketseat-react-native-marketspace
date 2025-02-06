import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { PhotoFile } from '@utils/types'

import { useAuth } from '@hooks/useAuth'

export const usePhoto = () => {
  const {
    user: { name: userName },
  } = useAuth()

  const saveImagePermanently = async (imageUri: string) => {
    if (!FileSystem.documentDirectory) {
      throw new Error('O diretório de cache não está disponível.')
    }

    const fileName = imageUri.split('/').pop() // Obtém o nome do arquivo
    const newPath = `${FileSystem.documentDirectory}${fileName}` // Caminho no diretório seguro

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath,
      })
      return newPath // Retorna o novo caminho
    } catch (error) {
      console.error('Erro ao mover a imagem:', error)
      return imageUri // Se falhar, mantém o caminho original
    }
  }

  const handePhotoRemove = (
    photoURI: string,
    setPhotosFile: React.Dispatch<React.SetStateAction<PhotoFile[]>>,
  ) => {
    setPhotosFile((photosURI) =>
      photosURI.filter((photo) => photo.uri !== photoURI),
    )
  }

  const handleImageSelection = async (
    setPhotosFile: React.Dispatch<React.SetStateAction<PhotoFile[]>>,
  ) => {
    try {
      const selectedPhotos = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: 3,
      })

      if (selectedPhotos.canceled) {
        return
      }

      const selectedPhotosURI = await Promise.all(
        selectedPhotos.assets.map(async (photo) => {
          return await saveImagePermanently(photo.uri)
        }),
      )

      const photosFormattedFiles: PhotoFile[] = selectedPhotosURI.map(
        (imageUri, index) => {
          const extension = imageUri.split('.').pop()
          const type = selectedPhotos.assets[index].type

          const file = {
            uri: imageUri,
            type: `${type}/${extension}`,
            name: `${userName}.${extension}`.toLowerCase().replace(/\s/g, ''),
          }

          return file
        },
      )

      setPhotosFile(photosFormattedFiles)
    } catch (error) {
      console.error(error)
    }
  }

  return { handleImageSelection, handePhotoRemove }
}
