import { useState } from 'react'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
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
import { api } from '@api/api'

export const SignUp = () => {
  const navigator = useNavigation<AuthNavigationRoutesProps>()

  const [photoURI, setPhotoURI] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)

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

  const updateUserProfilePhoto = async () => {
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        mediaTypes: ['images'],
        base64: false,
      })

      if (selectedPhoto.canceled) {
        return
      }

      const photoURI = selectedPhoto.assets[0].uri
      setPhotoURI(photoURI)

      if (photoURI) {
        const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
          size: number
        }

        if (photoInfo?.size && photoInfo.size / 1024 / 1024 > 5) {
          console.log('photo is too big')
          return
        }

        const photoExtension = photoURI.split('.').pop()
        const photoType = selectedPhoto.assets[0].type

        const photoFile = {
          uri: photoURI,
          type: `${photoType}/${photoExtension}`,
          name: `photo.${photoExtension}`,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any

        setPhotoFile(photoFile)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (data: SignUpFormData) => {
    if (!photoFile) {
      console.log('photo is required')
      return
    }

    const formData = new FormData()
    formData.append('tel', data.tel)
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('avatar', photoFile)
    formData.append('password', data.password)

    try {
      await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (error) {
      console.log(error)
    }
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

        <Center mt={'$8'} rowGap={'$3'}>
          <UserPhotoEdit
            photoURI={photoURI}
            updateUserProfilePhoto={updateUserProfilePhoto}
          />

          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={'Nome'}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={'email'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={'E-mail'}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={'tel'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder={'Telefone'}
                errorMessage={errors.tel?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={'password'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={'Senha'}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                secureTextEntry
              />
            )}
          />

          <Controller
            control={control}
            name={'confirmPassword'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder={'Confirme a senha'}
                errorMessage={errors.confirmPassword?.message}
                secureTextEntry
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
