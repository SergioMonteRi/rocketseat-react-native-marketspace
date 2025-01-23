import { createContext, useCallback, useState } from 'react'

import { fetchSessionSignIn } from '@services/session'

import { useCustomToast } from '@hooks/useCustomToast'

import { UserDTO } from '@dtos/UserDTO'

import { AuthContextDataProps, AuthContextProviderProps } from './types'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { showToast } = useCustomToast()

  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isSigningIn, setIsSigningIn] = useState(false)

  const signIn = useCallback(
    async (email: string, password: string) => {
      // TODO
      console.log(email, password)

      setIsSigningIn(true)

      try {
        const response = await fetchSessionSignIn(email, password)

        console.log(response)

        setUser(response.user)

        // TODO
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
    [showToast],
  )

  return (
    <AuthContext.Provider value={{ user, isSigningIn, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
