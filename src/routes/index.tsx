import { Box } from '@gluestack-ui/themed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { useAuth } from '@hooks/useAuth'

import { ScreenLoader } from '@components/ScreenLoader'

import { AppRoutes } from './app/app.routes'
import { AuthRoutes } from './auth/auth.routes'

import { gluestackUIConfig } from '../../config/gluestack-ui.config'

export const Routes = () => {
  const { user, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray6

  if (isLoadingUserStorageData) {
    return <ScreenLoader />
  }

  return (
    <Box flex={1} bg={'$gray7'}>
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}
