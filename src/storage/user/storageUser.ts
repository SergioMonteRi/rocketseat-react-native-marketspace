import AsyncStorage from '@react-native-async-storage/async-storage'

import { STORAGE_USER_DATA } from '@storage/storageConfig'

import { UserDTO } from '@dtos/UserDTO'

export const storageUserSave = async (user: UserDTO) => {
  try {
    await AsyncStorage.setItem(STORAGE_USER_DATA, JSON.stringify(user))
  } catch (error) {
    console.error('storageUserSave', error)
  }
}

export const storageUserGet = async () => {
  try {
    const storageData = await AsyncStorage.getItem(STORAGE_USER_DATA)

    const user: UserDTO = storageData ? JSON.parse(storageData) : null

    return user
  } catch (error) {
    console.error('storageUserGet', error)
  }
}

export const storageUserRemove = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_USER_DATA)
  } catch (error) {
    console.error('storageUserRemove', error)
  }
}
