import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CreateAd } from '@screens/CreateAd'

import { HomeStack } from './HomeStack/home.routes'

import { AppRoutesProps } from './types'
import { AdDetails } from '@screens/AdDetails'

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="adDetails" component={AdDetails} />
      <Screen name="createAd" component={CreateAd} />
      <Screen name="home" component={HomeStack} />
    </Navigator>
  )
}
