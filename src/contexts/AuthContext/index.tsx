import { createContext, useCallback, useEffect, useState } from 'react'

import { fetchSessionSignIn } from '@services/session'

import { useCustomToast } from '@hooks/useCustomToast'

import { UserDTO } from '@dtos/UserDTO'

import { AuthContextDataProps, AuthContextProviderProps } from './types'
import {
  storageUserGet,
  storageUserSave,
  storageUserRemove,
} from '@storage/user/storageUser'
import {
  storageAuthTokenGet,
  storageAuthTokenSave,
  storageAuthTokenRemove,
} from '@storage/authToken/storageAuthToken'
import { api } from '@api/api'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { showToast } = useCustomToast()

  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  const userDataAndTokenUpdate = useCallback((user: UserDTO, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setUser(user)
  }, [])

  const storageSaveUserAndTokenData = useCallback(
    async (user: UserDTO, token: string, refreshToken: string) => {
      await storageUserSave(user)
      await storageAuthTokenSave({ token, refreshToken })
    },
    [],
  )

  const signIn = useCallback(
    async (email: string, password: string) => {
      setIsSigningIn(true)

      try {
        const response = await fetchSessionSignIn(email, password)

        if (response?.user && response?.token && response?.refresh_token) {
          const { user, token, refresh_token: refreshToken } = response

          await storageSaveUserAndTokenData(user, token, refreshToken)
          userDataAndTokenUpdate(user, token)
        }
      } catch (error) {
        showToast({
          error,
          type: 'error',
          title: 'Não foi possível fazer login, tente novamente mais tarde',
        })
      } finally {
        setIsSigningIn(false)
      }
    },
    [showToast, storageSaveUserAndTokenData, userDataAndTokenUpdate],
  )

  const loadUserData = useCallback(async () => {
    try {
      setIsLoadingUserStorageData(true)

      const userData = await storageUserGet()
      const tokenData = await storageAuthTokenGet()

      console.log(userData, tokenData)

      if (userData && tokenData) {
        userDataAndTokenUpdate(userData, tokenData.token)
      }
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }, [userDataAndTokenUpdate])

  const signOut = useCallback(async () => {
    await storageUserRemove()
    await storageAuthTokenRemove()

    setUser({} as UserDTO)
  }, [])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  return (
    <AuthContext.Provider
      value={{ user, isSigningIn, isLoadingUserStorageData, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
