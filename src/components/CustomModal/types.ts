export type CustomModalProps = {
  title: string
  description: string
  onClose?: () => void
  onConfirm: () => void
  onDismiss?: () => void
}
