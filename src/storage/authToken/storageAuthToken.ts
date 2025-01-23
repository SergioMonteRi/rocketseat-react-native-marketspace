import AsyncStorage from '@react-native-async-storage/async-storage'

import { STORAGE_AUTH_TOKEN } from '@storage/storageConfig'

import { StorageAuthTokenProps } from './types'

export const storageAuthTokenSave = async (props: StorageAuthTokenProps) => {
  try {
    const { token, refreshToken } = props

    await AsyncStorage.setItem(
      STORAGE_AUTH_TOKEN,
      JSON.stringify({ token, refreshToken }),
    )
  } catch (error) {
    console.error('storageAuthTokenSave', error)
  }
}

export const storageAuthTokenGet = async () => {
  try {
    const storageData = await AsyncStorage.getItem(STORAGE_AUTH_TOKEN)

    const { token, refreshToken }: StorageAuthTokenProps = storageData
      ? JSON.parse(storageData)
      : {}

    return { token, refreshToken }
  } catch (error) {
    console.error('storageAuthTokenGet', error)
  }
}

export const storageAuthTokenRemove = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_AUTH_TOKEN)
  } catch (error) {
    console.error('storageAuthTokenRemove', error)
  }
}
