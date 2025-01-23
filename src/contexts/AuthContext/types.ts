import { UserDTO } from '@dtos/UserDTO'

export type AuthContextDataProps = {
  user: UserDTO
  isSigningIn: boolean
  isLoadingUserStorageData: boolean
  signIn: (email: string, password: string) => Promise<void>
}

export type AuthContextProviderProps = {
  children: React.ReactNode
}
