import { UserDTO } from './UserDTO'

export type SessionDTO = {
  user: UserDTO
  token: string
  refresh_token: string
}
