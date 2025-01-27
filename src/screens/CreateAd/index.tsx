import { Box, Text, VStack, ScrollView, HStack } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { Radio } from '@components/Radio'
import { Switch } from '@components/Switch'
import { Checkbox } from '@components/Checkbox'
import { TextArea } from '@components/TextArea'
import { BackHeader } from './components/BackHeader'
import { InputCurrency } from '@components/InputCurrency'
import { PhotoSelector } from './components/PhotoSelector'
import { Button } from '@components/Button'

export const CreateAd = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <VStack p={'$6'}>
        <BackHeader />

        <Box mt={'$5'}>
          <PhotoSelector />
        </Box>

        <Box rowGap={'$2'} mt={'$5'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Sobre o produto
          </Text>

          <Input placeholder={'Título do anúncio'} />

          <TextArea placeholder={'Descrição do produto'} />

          <Radio
            options={[
              { label: 'Produto novo', value: 'new' },
              { label: 'Produto usado', value: 'used' },
            ]}
          />
        </Box>

        <Box rowGap={'$2'} mt={'$5'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Venda
          </Text>

          <InputCurrency
            onChangeText={() => {
              console.log('teste')
            }}
          />
        </Box>

        <Box rowGap={'$2'} alignItems={'flex-start'} mt={'$5'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Aceita troca?
          </Text>

          <Switch />
        </Box>

        <Box rowGap={'$2'} mt={'$3'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Meios de pagamento aceitos
          </Text>

          <Checkbox label={'Boleto'} value={'boleto'} />

          <Checkbox label={'Pix'} value={'pix'} />

          <Checkbox label={'Dinheiro'} value={'cash'} />

          <Checkbox label={'Cartão de crédito'} value={'card'} />

          <Checkbox label={'Depósito bancário'} value={'deposit'} />
        </Box>
      </VStack>
      <Box bgColor={'$gray7'} p={'$6'}>
        <HStack columnGap={'$4'}>
          <Box flex={1}>
            <Button title={'Cancelar'} customVariant={'secondary'} />
          </Box>

          <Box flex={1}>
            <Button title={'Avançar'} customVariant={'tertiary'} />
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  )
}
