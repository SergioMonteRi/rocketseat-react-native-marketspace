import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
}

export type AppNavigationRouteProps = BottomTabNavigationProp<AppRoutesProps>
