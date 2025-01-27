import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type HomeRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
}

export type HomeNavigationRoutesProps = BottomTabNavigationProp<HomeRoutesProps>
