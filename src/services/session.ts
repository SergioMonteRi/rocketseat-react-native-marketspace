import { api } from '@api/api'

import { SessionDTO } from '@dtos/SessionDTO'

export const fetchSessionSignIn = async (email: string, password: string) => {
  const { data } = await api.post<SessionDTO>('/sessions', {
    email,
    password,
  })

  return data
}
