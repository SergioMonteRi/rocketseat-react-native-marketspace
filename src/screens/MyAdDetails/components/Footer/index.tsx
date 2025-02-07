import { Box, VStack } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { CirclePower, Trash } from 'lucide-react-native'

import { useAd } from '@hooks/useAd'
import { useCustomModal } from '@hooks/useCustomModal'

import { Button } from '@components/Button'
import { ScreenLoader } from '@components/ScreenLoader'

import { AppNavigationRouteProps } from '@routes/app/types'

import { FooterProps } from './types'

export const Footer = (props: FooterProps) => {
  const { adId, isActive } = props

  console.log('ad active status 2', isActive)

  const { showModal } = useCustomModal()
  const navigator = useNavigation<AppNavigationRouteProps>()
  const { isLoadingToggleAdActivation, handleToggleAdActivation } = useAd()

  const onToggleAdActivation = async () => {
    await handleToggleAdActivation(adId, !isActive)

    navigator.navigate('myAds')
  }

  const handleInactiveAd = () => {
    showModal({
      title: 'Desativar Anúncio',
      onConfirmBtnTitle: isActive ? 'Desativar' : 'Reativar',
      description: 'Tem certeza que deseja desativar este anúncio?',
      onConfirm: async () => await onToggleAdActivation(),
    })
  }

  return (
    <>
      {isLoadingToggleAdActivation && <ScreenLoader />}

      <VStack
        p={'$6'}
        pb={'$7'}
        bottom={0}
        w={'$full'}
        rowGap={'$2'}
        bgColor={'$gray7'}
        position={'absolute'}
      >
        <Box flex={1}>
          <Button
            icon={CirclePower}
            customVariant={isActive ? 'tertiary' : 'primary'}
            title={isActive ? 'Desativar Anúncio' : 'Reativar Anúncio'}
            onPress={handleInactiveAd}
          />
        </Box>
        <Box flex={1}>
          <Button
            icon={Trash}
            title={'Excluir Anúncio'}
            customVariant={'secondary'}
          />
        </Box>
      </VStack>
    </>
  )
}
