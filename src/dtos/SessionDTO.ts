import { UserDTO } from './UserDTO'

export type SessionDTO = {
  token: string
  'refresh-token': string
  user: UserDTO
}
