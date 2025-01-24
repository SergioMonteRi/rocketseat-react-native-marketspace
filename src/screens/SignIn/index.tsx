import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, ScrollView, Text, VStack } from '@gluestack-ui/themed'

import { useAuth } from '@hooks/useAuth'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { AuthNavigationRoutesProps } from '@routes/auth/types'

import { SignInFormData } from './types'

import { signInSchema } from './formSchema'

import Logo from '@assets/logo.svg'

import { gluestackUIConfig } from '../../../config/gluestack-ui.config'
import { Eye, EyeClosed } from 'lucide-react-native'

export const SignIn = () => {
  const backGroundColor = gluestackUIConfig.tokens.colors.gray7

  const { isSigningIn, signIn } = useAuth()
  const navigator = useNavigation<AuthNavigationRoutesProps>()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  })

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const handleNewAccount = () => {
    navigator.navigate('signUp')
  }

  const onSubmit = async (data: SignInFormData) => {
    await signIn(data.email, data.password)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: backGroundColor }}
    >
      <VStack bg={'$gray6'} p={'$10'} pb={'$16'} rounded={'$3xl'}>
        <Center pt={'$20'}>
          <Logo />

          <Text
            mt={'$7'}
            fontSize={'$3xl'}
            color={'$gray1'}
            fontFamily={'$heading'}
          >
            marketspace
          </Text>

          <Text color={'$gray3'} fontSize={'$sm'}>
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Box gap={'$4'} mt={'$16'}>
          <Text
            mt={'$4.5'}
            fontSize={'$sm'}
            color={'$gray2'}
            textAlign={'center'}
            fontFamily={'$heading'}
          >
            Acesse sua conta
          </Text>

          <Controller
            control={control}
            name={'email'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={'E-mail'}
                autoCapitalize={'none'}
                onChangeText={onChange}
                keyboardType={'email-address'}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder="Senha"
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                firstIcon={isPasswordVisible ? Eye : EyeClosed}
                onPressFirstIcon={togglePasswordVisibility}
                secureTextEntry={!isPasswordVisible}
              />
            )}
          />
        </Box>

        <Button
          mt={'$11'}
          title={'Entrar'}
          isLoading={isSigningIn}
          onPress={handleSubmit(onSubmit)}
        />
      </VStack>

      <Center p={'$10'} flex={1} rowGap={'$4'} bg={'$gray7'}>
        <Text
          fontSize={'$sm'}
          color={'$gray2'}
          textAlign={'center'}
          fontFamily={'$heading'}
        >
          Ainda não tem acesso?
        </Text>

        <Button
          title={'Crar uma conta'}
          customVariant={'secondary'}
          onPress={handleNewAccount}
        />
      </Center>
    </ScrollView>
  )
}
