import { CustomModal } from '@components/CustomModal'
import { CustomModalProps } from '@components/CustomModal/types'
import { Modal } from '@gluestack-ui/themed'
import { createContext, useCallback, useState } from 'react'

export type ModalContextDataProps = {
  showModal: (props: CustomModalProps) => void
}

export type ModalContextProviderProps = {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextDataProps>(
  {} as ModalContextDataProps,
)

export const ModalProvider = ({ children }: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<CustomModalProps>(
    {} as CustomModalProps,
  )

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const handleDismissModal = useCallback(() => {
    toggleModal()
  }, [toggleModal])

  const handleCloseModal = useCallback(() => {
    toggleModal()
    modalData.onClose?.()
  }, [modalData, toggleModal])

  const handleOnConfirm = useCallback(() => {
    toggleModal()
    modalData.onConfirm?.()
  }, [modalData, toggleModal])

  const showModal = useCallback(
    (props: CustomModalProps) => {
      setModalData(props)
      toggleModal()
    },
    [toggleModal],
  )

  return (
    <ModalContext.Provider value={{ showModal }}>
      <Modal isOpen={isModalOpen && !!modalData} onClose={handleDismissModal}>
        <CustomModal
          title={modalData.title}
          onClose={handleCloseModal}
          onConfirm={handleOnConfirm}
          onDismiss={handleDismissModal}
          description={modalData.description}
        />
      </Modal>

      {children}
    </ModalContext.Provider>
  )
}
