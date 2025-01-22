import { Box } from '@gluestack-ui/themed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth/auth.routes'

import { gluestackUIConfig } from '../../config/gluestack-ui.config'

export const Routes = () => {
  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray6

  return (
    <Box flex={1} bg={'$gray7'}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
