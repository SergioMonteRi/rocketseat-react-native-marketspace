import axios from 'axios'

import { AppError } from '@utils/AppError'

export const api = axios.create({
  baseURL: 'http://192.168.0.7:3333',
})

// api.interceptors.request.use(
//   (config) => {
//     console.info('interceptor request', config)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('interceptor response error', error)

    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        console.info('interceptor response error', error.response.data)

        return Promise.reject(new AppError(error.response.data.message))
      }
    }

    return Promise.reject(error)
  },
)
