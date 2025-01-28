import {
  Box,
  Center,
  HStack,
  ScrollView,
  Text,
  VStack,
  Icon,
} from '@gluestack-ui/themed'

import { ImagesCarousel } from './components/ImagesCarousel'

import { AdDetailsMock } from './mock'
import { UserProfilePhoto } from '@components/UserProfilePhoto'
import { useAuth } from '@hooks/useAuth'
import {
  QrCode,
  Banknote,
  DollarSign,
  CreditCard,
  Landmark,
  LucideIcon,
  ArrowLeft,
} from 'lucide-react-native'
import { Button } from '@components/Button'

type PaymentMethod = 'boleto' | 'pix' | 'cash' | 'card' | 'deposit'

const paymentIcons: Record<PaymentMethod, LucideIcon> = {
  boleto: Banknote, // Representa dinheiro em papel, similar ao boleto
  pix: QrCode, // Pix usa QR Code, então esse ícone é o mais adequado
  cash: DollarSign, // Ícone de dinheiro (cash)
  card: CreditCard, // Ícone de cartão de crédito
  deposit: Landmark, // Representa um banco, adequado para depósito bancário
}

const paymentsName: Record<PaymentMethod, string> = {
  pix: 'Pix',
  boleto: 'Boleto',
  cash: 'Dinheiro',
  card: 'Cartão de crédito',
  deposit: 'Depósito bancário',
}

export const AdDetails = () => {
  //   const navigation = useNavigation<AppNavigationRouteProps>()
  //   const route = useRoute()

  const {
    user: { name },
  } = useAuth()

  const {
    adName,
    adPrice,
    adIsNew,
    adImages,
    adDescription,
    adIsNegotiable,
    adPaymentMethods,
    isPreview,
  } = AdDetailsMock

  return (
    <VStack>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 128,
        }}
      >
        <VStack w={'$full'} bgColor={'$blueLight'} pt={'$16'} pb={'$4'}>
          <Center>
            <Text color={'$gray7'} fontFamily={'$heading'} fontSize={'$md'}>
              Pré visualização do anúncio
            </Text>
            <Text color={'$gray7'} fontFamily={'$body'} fontSize={'$sm'}>
              É assim que seu produto vai aparecer!
            </Text>
          </Center>
        </VStack>

        <ImagesCarousel />

        <VStack p={'$6'} rowGap={'$6'}>
          <HStack columnGap={'$2'} alignItems={'center'}>
            <UserProfilePhoto w={'$6'} h={'$6'} />
            <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray1'}>
              {name}
            </Text>
          </HStack>

          <VStack rowGap={'$2'}>
            <Box
              px={'$2'}
              py={'$1'}
              rounded={'$xl'}
              bgColor={'$gray5'}
              alignSelf={'flex-start'}
            >
              <Text fontFamily={'$heading'} fontSize={'$xs'} color={'$gray2'}>
                {adIsNew ? 'NOVO' : 'USADO'}
              </Text>
            </Box>

            <HStack
              mt={'$1'}
              alignItems={'baseline'}
              justifyContent={'space-between'}
            >
              <Text fontFamily={'$heading'} fontSize={'$xl'} color={'$gray1'}>
                {adName}
              </Text>
              <HStack alignItems={'baseline'}>
                <Text color={'$blueLight'} fontFamily={'$heading'}>
                  R$
                </Text>
                <Text
                  fontSize={'$xl'}
                  color={'$blueLight'}
                  fontFamily={'$heading'}
                >
                  {adPrice}
                </Text>
              </HStack>
            </HStack>

            <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
              {adDescription}
            </Text>

            <HStack columnGap={'$2'} mt={'$2'}>
              <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
                Aceita troca?
              </Text>
              <Text fontFamily={'$body'} fontSize={'$sm'} color={'$gray2'}>
                {adIsNegotiable ? 'Sim' : 'Não'}
              </Text>
            </HStack>

            <VStack rowGap={'$2'} mt={'$2'}>
              <Text fontFamily={'$heading'} fontSize={'$sm'} color={'$gray2'}>
                Meios de pagamento
              </Text>

              <VStack columnGap={'$2'} rowGap={'$2'}>
                {adPaymentMethods.map((paymentMethod) => {
                  const IconComponent = paymentIcons[paymentMethod] || Banknote
                  const paymentName = paymentsName[paymentMethod]

                  return (
                    <HStack
                      key={paymentMethod}
                      columnGap={'$2'}
                      alignItems={'center'}
                    >
                      <Icon as={IconComponent} />
                      <Text
                        color={'$gray2'}
                        fontSize={'$sm'}
                        fontFamily={'$body'}
                      >
                        {paymentName}
                      </Text>
                    </HStack>
                  )
                })}
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>

      <HStack
        p={'$6'}
        pb={'$7'}
        bottom={0}
        columnGap={'$3'}
        bgColor={'$gray7'}
        position={'absolute'}
      >
        <Box flex={1}>
          <Button
            title={'Voltar e editar'}
            customVariant="secondary"
            icon={ArrowLeft}
          />
        </Box>
        <Box flex={1}>
          <Button title={'Publicar'} />
        </Box>
      </HStack>
    </VStack>
  )
}
