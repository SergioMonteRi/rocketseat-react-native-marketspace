import { Pressable } from '@gluestack-ui/themed'
import { LogOutIcon } from 'lucide-react-native'

import { useAuth } from '@hooks/useAuth'
import { useCustomModal } from '@hooks/useCustomModal'

import { LogOutProps } from './types'

export const LogOut = (props: LogOutProps) => {
  const { color, size, width, height } = props

  const { signOut } = useAuth()
  const { showModal } = useCustomModal()

  const handleLogOut = () => {
    showModal({
      title: 'Sair',
      description: 'Deseja realmente sair?',
      onConfirm: signOut,
    })
  }

  return (
    <Pressable onPress={handleLogOut}>
      <LogOutIcon size={size} color={color} width={width} height={height} />
    </Pressable>
  )
}
