import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Center, ScrollView, Text, VStack } from '@gluestack-ui/themed'

import { Button } from '@components/Button'
import { UserPhotoEdit } from '@components/UserPhotoEdit'

import { signUpSchema } from './formSchema'

import { SignUpFormData } from './type'

import Logo from '@assets/logo.svg'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigationRoutesProps } from '@routes/auth/types'

export const SignUp = () => {
  const navigator = useNavigation<AuthNavigationRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  })

  const handleBackToLogin = () => {
    navigator.navigate('signIn')
  }

  const onSubmit = (data: SignUpFormData) => {
    console.log(data)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack p={'$10'} rounded={'$3xl'} flex={1}>
        <Center pt={'$8'} rowGap={'$2'}>
          <Logo height={40} />

          <Text fontSize={'$xl'} color={'$gray1'} fontFamily={'$heading'}>
            Boas vindas!
          </Text>

          <Text
            color={'$gray2'}
            fontSize={'$sm'}
            textAlign={'center'}
            fontFamily={'$body'}
          >
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
        </Center>

        <Center mt={'$8'} rowGap={'$4'}>
          <UserPhotoEdit />

          <Controller
            control={control}
            name={'name'}
            render={({ field }) => (
              <Input
                placeholder={'Nome'}
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name={'email'}
            render={({ field }) => (
              <Input
                placeholder={'E-mail'}
                errorMessage={errors.email?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name={'tel'}
            render={({ field }) => (
              <Input
                placeholder={'Telefone'}
                errorMessage={errors.tel?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name={'password'}
            render={({ field }) => (
              <Input
                placeholder={'Senha'}
                errorMessage={errors.password?.message}
                secureTextEntry
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name={'confirmPassword'}
            render={({ field }) => (
              <Input
                placeholder={'Confirme a senha'}
                errorMessage={errors.confirmPassword?.message}
                secureTextEntry
                {...field}
              />
            )}
          />

          <Button
            mt={'$2'}
            title={'Criar'}
            customVariant={'tertiary'}
            onPress={handleSubmit(onSubmit)}
          />
        </Center>

        <Box flex={1} justifyContent={'flex-end'} rowGap={'$4'}>
          <Text
            fontSize={'$sm'}
            color={'$gray2'}
            textAlign={'center'}
            fontFamily={'$heading'}
          >
            Já tem uma conta?
          </Text>

          <Button
            title={'Ir para login'}
            customVariant={'secondary'}
            onPress={handleBackToLogin}
          />
        </Box>
      </VStack>
    </ScrollView>
  )
}
