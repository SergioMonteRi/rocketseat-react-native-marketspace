import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
}

export type AppNavigationRouteProps = NativeStackNavigationProp<AppRoutesProps>
