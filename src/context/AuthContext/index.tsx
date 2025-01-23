import { createContext, useCallback, useState } from 'react'

import { AuthContextDataProps, AuthContextProviderProps } from './types'
import { UserDTO } from '@dtos/UserDTO'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  const signIn = useCallback(async (email: string, password: string) => {
    // TODO
    console.log(email, password)
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
