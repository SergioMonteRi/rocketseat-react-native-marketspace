import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AdDetailsRouteParams } from '@screens/AdPreview/types'

export type AppRoutesProps = {
  home: undefined
  myAds: undefined
  logOut: undefined
  createAd: undefined
  adPreview: { adId: string }
  adDetails: AdDetailsRouteParams
}

export type AppNavigationRouteProps = NativeStackNavigationProp<AppRoutesProps>
