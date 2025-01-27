import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { CreateAd } from '@screens/CreateAd'

import { HomeRoutesProps } from './types'

const { Navigator, Screen } = createNativeStackNavigator<HomeRoutesProps>()

export const HomeStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="createAd" component={CreateAd} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
