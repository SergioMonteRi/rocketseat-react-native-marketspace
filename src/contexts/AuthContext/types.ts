import { UserDTO } from '@dtos/UserDTO'

export type AuthContextDataProps = {
  user: UserDTO
  isSigningIn: boolean
  isLoadingUserStorageData: boolean
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
}

export type AuthContextProviderProps = {
  children: React.ReactNode
}
