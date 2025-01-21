/* eslint-disable camelcase */
import { StatusBar } from 'react-native'

import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'

import { config } from './config/gluestack-ui.config'

import { SignIn } from '@screens/SignIn'

export default function App() {
  const [isFontLoaded] = useFonts({
    Karla_700Bold,
    Karla_400Regular,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />

      {isFontLoaded ? <SignIn /> : <Text>Loading...</Text>}
    </GluestackUIProvider>
  )
}
