import { Box, Center, ScrollView, Text, VStack } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'

export const SignIn = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

        <Box gap={'$5'} mt={'$16'}>
          <Text
            mt={'$4.5'}
            fontSize={'$sm'}
            color={'$gray2'}
            textAlign={'center'}
            fontFamily={'$heading'}
          >
            Acesse sua conta
          </Text>

          <Input
            placeholder={'E-mail'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />

          <Input placeholder={'Senha'} secureTextEntry />
        </Box>

        <Button title={'Entrar'} mt={'$11'} />
      </VStack>

      <Center p={'$10'} flex={1} rowGap={'$4'}>
        <Text
          fontSize={'$sm'}
          color={'$gray2'}
          textAlign={'center'}
          fontFamily={'$heading'}
        >
          Ainda não tem acesso?
        </Text>

        <Button title={'Cadastre-se'} customVariant={'secondary'} />
      </Center>
    </ScrollView>
  )
}
