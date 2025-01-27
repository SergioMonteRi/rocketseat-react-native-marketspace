import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Box, Text, VStack, ScrollView, HStack } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { Radio } from '@components/Radio'
import { Switch } from '@components/Switch'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
import { TextArea } from '@components/TextArea'
import { BackHeader } from './components/BackHeader'
import { InputCurrency } from '@components/InputCurrency'
import { PhotoSelector } from './components/PhotoSelector'

import { CreateAdFormData } from './types'
import { api } from '@api/api'

export const CreateAd = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdFormData>({
    defaultValues: {
      payment_methods: [],
    },
  })

  const onSubmit = async (data: CreateAdFormData) => {
    const formattedPrice = data.price.replace(/\./g, '').replace(',', '.')

    const formattedPayload = {
      ...data,
      price: Number(formattedPrice),
    }

    await api.post('/products', formattedPayload)
  }

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

          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={'Título do anúncio'}
                errorMessage={errors.name?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name={'description'}
            render={({ field: { onChange, value } }) => (
              <TextArea
                value={value}
                placeholder={'Descrição do produto'}
                errorMessage={errors.description?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="is_new"
            render={({ field: { onChange, value } }) => (
              <Radio
                options={[
                  { label: 'Produto novo', value: 'true' },
                  { label: 'Produto usado', value: 'false' },
                ]}
                value={String(value)}
                onChange={(newValue) => onChange(newValue === 'true')}
              />
            )}
          />
        </Box>

        <Box rowGap={'$2'} mt={'$5'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Venda
          </Text>

          <Controller
            control={control}
            name={'price'}
            render={({ field: { onChange, value } }) => (
              <InputCurrency
                value={value}
                placeholder={'Preço'}
                errorMessage={errors.price?.message}
                onChangeText={onChange}
              />
            )}
          />
        </Box>

        <Box rowGap={'$2'} alignItems={'flex-start'} mt={'$5'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Aceita troca?
          </Text>

          <Controller
            control={control}
            name={'accept_trade'}
            render={({ field: { onChange, value } }) => (
              <Switch value={value} onValueChange={onChange} />
            )}
          />
        </Box>

        <Box rowGap={'$2'} mt={'$3'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Meios de pagamento aceitos
          </Text>

          <Controller
            name="payment_methods"
            control={control}
            render={({ field }) => {
              const { value, onChange } = field

              const handleCheck = (method: string) => {
                if (value.includes(method)) {
                  onChange(value.filter((item) => item !== method))
                } else {
                  onChange([...value, method])
                }
              }

              return (
                <>
                  <Checkbox
                    label={'Boleto'}
                    value={'boleto'}
                    aria-label={'Boleto'}
                    isChecked={value.includes('boleto')}
                    onPress={() => handleCheck('boleto')}
                  />
                  <Checkbox
                    label={'Pix'}
                    value={'pix'}
                    aria-label={'Pix'}
                    isChecked={value.includes('pix')}
                    onPress={() => handleCheck('pix')}
                  />
                  <Checkbox
                    value={'cash'}
                    label={'Dinheiro'}
                    area-label={'Dinheiro'}
                    isChecked={value.includes('cash')}
                    onPress={() => handleCheck('cash')}
                  />
                  <Checkbox
                    value={'card'}
                    label={'Cartão de crédito'}
                    aria-label="Cartão de crédito"
                    isChecked={value.includes('card')}
                    onPress={() => handleCheck('card')}
                  />
                  <Checkbox
                    value={'deposit'}
                    label={'Depósito bancário'}
                    aria-label="Depósito bancário"
                    isChecked={value.includes('deposit')}
                    onPress={() => handleCheck('deposit')}
                  />
                </>
              )
            }}
          />
        </Box>
      </VStack>

      <Box bgColor={'$gray7'} p={'$6'}>
        <HStack columnGap={'$4'}>
          <Box flex={1}>
            <Button title={'Cancelar'} customVariant={'secondary'} />
          </Box>

          <Box flex={1}>
            <Button
              title={'Avançar'}
              customVariant={'tertiary'}
              onPress={handleSubmit(onSubmit)}
            />
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  )
}
