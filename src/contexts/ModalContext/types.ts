import { CustomModalProps } from '@components/CustomModal/types'

export type ModalContextDataProps = {
  showModal: (props: CustomModalProps) => void
}

export type ModalContextProviderProps = {
  children: React.ReactNode
}
