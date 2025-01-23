import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { MyAds } from '@screens/MyAds'

import { AppRoutesProps } from './types'

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="myAds" component={MyAds} />
    </Navigator>
  )
}
