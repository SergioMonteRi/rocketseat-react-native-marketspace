import React from 'react'
import {
  Text,
  InputSlot,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GlueStackInput,
} from '@gluestack-ui/themed'

import { InputCurrencyProps } from './types'

export const InputCurrency = (props: InputCurrencyProps) => {
  const {
    value,
    onChangeText,
    isReadOnly = false,
    errorMessage = null,
    placeholder = 'Valor do produto',
    ...rest
  } = props

  const isInvalid = !!errorMessage

  // Formata o valor para Real (R$)
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    const formatted = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(numericValue) / 100)
    return formatted
  }

  const handleChangeText = (text: string) => {
    onChangeText && onChangeText(formatCurrency(text)) // Atualiza o estado com o valor formatado
  }

  return (
    <FormControl isInvalid={isInvalid} mb={'$1'}>
      <GlueStackInput
        h={'$11'}
        w={'$full'}
        bg={'$gray7'}
        pl={'$3'}
        pr={'$4'}
        borderWidth={'$0'}
        borderRadius={'$md'}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{
          borderWidth: '$1',
          borderColor: '$red500',
        }}
        $focus={{
          borderWidth: '$1',
          borderColor: isInvalid ? '$red500' : '$gray3',
        }}
      >
        <InputSlot>
          <Text>R$</Text>
        </InputSlot>

        <InputField
          value={value}
          color={'$gray1'}
          fontFamily={'$body'}
          keyboardType="numeric"
          placeholder={placeholder}
          placeholderTextColor={'$gray4'}
          onChangeText={handleChangeText}
          {...rest}
        />
      </GlueStackInput>

      {/* Mensagem de Erro */}
      <FormControlError>
        <FormControlErrorText color={'$red500'}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
