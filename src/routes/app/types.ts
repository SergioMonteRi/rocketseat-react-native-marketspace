import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AdDetailsRouteParams } from '@screens/AdDetails/types'

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
  adDetails: AdDetailsRouteParams
}

export type AppNavigationRouteProps = NativeStackNavigationProp<AppRoutesProps>
