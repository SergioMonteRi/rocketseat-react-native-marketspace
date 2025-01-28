/* eslint-disable camelcase */
import { StatusBar } from 'react-native'

import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from '@expo-google-fonts/karla'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { config } from './config/gluestack-ui.config'

import { Routes } from '@routes/index'

import { AuthContextProvider } from '@contexts/AuthContext'
import { ModalProvider } from '@contexts/ModalContext'

export default function App() {
  const [isFontLoaded] = useFonts({
    Karla_700Bold,
    Karla_400Regular,
  })

  return (
    <GestureHandlerRootView>
      <GluestackUIProvider config={config}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent
        />
        <ModalProvider>
          <AuthContextProvider>
            {isFontLoaded ? <Routes /> : <Text>Loading...</Text>}
          </AuthContextProvider>
        </ModalProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}
