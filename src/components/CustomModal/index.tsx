import React from 'react'
import {
  Icon,
  Text,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalBackdrop,
  ModalCloseButton,
} from '@gluestack-ui/themed'
import { X } from 'lucide-react-native'

import { Button } from '@components/Button'

import { CustomModalProps } from './types'

export const CustomModal = (props: CustomModalProps) => {
  const { title, description, onClose, onConfirm, onDismiss } = props

  return (
    <>
      <ModalBackdrop />

      <ModalContent rowGap={'$1'}>
        <ModalHeader>
          <Text fontFamily={'$heading'} fontSize={'$xl'}>
            {title}
          </Text>

          <ModalCloseButton onPress={onDismiss}>
            <Icon as={X} color={'$gray3'} size={'md'} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <Text fontSize={'$sm'} color={'$gray1'}>
            {description}
          </Text>
        </ModalBody>

        <ModalFooter rowGap={8} columnGap={'$2'}>
          <Button
            title={'Cancelar'}
            customVariant={'secondary'}
            onPress={onClose}
          />

          <Button
            title={'Sair'}
            customVariant={'primary'}
            onPress={onConfirm}
          />
        </ModalFooter>
      </ModalContent>
    </>
  )
}
