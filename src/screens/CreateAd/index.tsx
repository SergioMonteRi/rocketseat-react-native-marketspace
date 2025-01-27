import { Plus } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import { Box, Text, Icon, VStack, ScrollView } from '@gluestack-ui/themed'

import { Input } from '@components/Input'
import { Radio } from '@components/Radio'
import { Switch } from '@components/Switch'
import { TextArea } from '@components/TextArea'
import { BackHeader } from './components/BackHeader'
import { InputCurrency } from '@components/InputCurrency'
import { Checkbox } from '@components/Checkbox'

export const CreateAd = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 32,
      }}
    >
      <VStack p={'$6'} rowGap={'$8'}>
        <BackHeader />

        <Box rowGap={'$2'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Imagens
          </Text>

          <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray3'}>
            Escolha até 3 imagens para mostrar o quando o seu produto é
            incrível!
          </Text>

          <TouchableOpacity>
            <Box
              w={'$24'}
              h={'$24'}
              mt={'$1'}
              bg={'$gray5'}
              rounded={'$md'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Icon as={Plus} size={'xl'} color={'$gray4'} />
            </Box>
          </TouchableOpacity>
        </Box>

        <Box rowGap={'$2'}>
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

        <Box rowGap={'$2'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Venda
          </Text>

          <InputCurrency
            onChangeText={() => {
              console.log('teste')
            }}
          />
        </Box>

        <Box rowGap={'$2'} alignItems={'flex-start'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Aceita troca?
          </Text>

          <Switch />
        </Box>

        <Box rowGap={'$2'}>
          <Text fontFamily={'$heading'} fontSize={'$md'} color={'$gray2'}>
            Meios de pagamento aceitos
          </Text>

          <Checkbox label={'Boleto'} value={'boleto'} />
        </Box>
      </VStack>
    </ScrollView>
  )
}
