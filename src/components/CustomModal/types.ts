export type CustomModalProps = {
  title: string
  description: string
  onConfirmBtnTitle?: string
  onClose?: () => void
  onConfirm: () => void
  onDismiss?: () => void
}
