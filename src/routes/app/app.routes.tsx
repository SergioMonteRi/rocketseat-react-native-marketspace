import { Platform } from 'react-native'
import { House, Tag } from 'lucide-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { MyAds } from '@screens/MyAds'

import { LogOut } from '@components/LogOut'

import { AppRoutesProps } from './types'
import { gluestackUIConfig } from '../../../config/gluestack-ui.config'

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()

export const AppRoutes = () => {
  const { tokens } = gluestackUIConfig
  const iconSize = tokens.space['6']

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.gray2,
        tabBarInactiveTintColor: tokens.colors.gray4,
        tabBarStyle: {
          display: 'flex',
          paddingTop: tokens.space['3'],
          backgroundColor: tokens.colors.gray7,
          height: Platform.OS === 'android' ? 64 : 96,
          paddingBottom: Platform.OS === 'android' ? 12 : 32,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} color={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag size={24} color={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="logOut"
        component={Home}
        options={{
          tabBarIcon: () => (
            <LogOut
              size={24}
              width={iconSize}
              height={iconSize}
              color={tokens.colors.red300}
            />
          ),
        }}
      />
    </Navigator>
  )
}
