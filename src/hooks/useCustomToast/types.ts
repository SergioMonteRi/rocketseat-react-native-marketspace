import { InterfaceToastProps } from '@gluestack-ui/toast/src/types'

type ToastStyleType = 'error' | 'success' | 'warning'

export type ShowToastProps = {
  title?: string
  error?: unknown
  type: ToastStyleType
  description?: string
  placement?: InterfaceToastProps['placement']
}
