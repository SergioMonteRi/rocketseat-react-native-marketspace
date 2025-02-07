import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AdDetailsRouteParams } from '@screens/AdPreview/types'

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
  adDetails: { adId: string }
  myAdDetails: { adId: string }
  adPreview: AdDetailsRouteParams
}

export type AppNavigationRouteProps = NativeStackNavigationProp<AppRoutesProps>
