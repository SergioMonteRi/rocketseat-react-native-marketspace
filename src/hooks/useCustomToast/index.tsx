import { useCallback } from 'react'
import { useToast } from '@gluestack-ui/themed'

import { AppError } from '@utils/AppError'

import { CustomToast } from '@components/CustomToast'

import { ShowToastProps } from './types'

export const useCustomToast = () => {
  const toast = useToast()

  const showToast = useCallback(
    (props: ShowToastProps) => {
      const { title, description, type, placement = 'top', error } = props

      const isAppError = error instanceof AppError

      const toastTile = isAppError
        ? error.message
        : title || 'Ocorreu um erro. Por favor tente mais tarde'

      toast.show({
        placement,
        render: ({ id }) => (
          <CustomToast
            id={id}
            type={type}
            title={toastTile}
            description={description}
            onClose={() => toast.close(id)}
          />
        ),
      })
    },
    [toast],
  )

  return { showToast }
}
