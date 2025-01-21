/* eslint-disable camelcase */
import { StatusBar } from 'react-native'

import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'

import { config } from './config/gluestack-ui.config'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'

export default function App() {
  const [isFontLoaded] = useFonts({
    Karla_700Bold,
    Karla_400Regular,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />

      {isFontLoaded ? (
        <Text color={'$blueLight'} fontSize={36}>
          Marketspace
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </GluestackUIProvider>
  )
}
