import { useRef } from 'react'
import { Dimensions } from 'react-native'
import { VStack, Image } from '@gluestack-ui/themed'
import { useSharedValue } from 'react-native-reanimated'
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel'
import { AdDetailsMock } from '@screens/AdDetails/mock'

const windowWidth = Dimensions.get('window').width

export const ImagesCarousel = () => {
  const carouselRef = useRef<ICarouselInstance>(null)
  const progress = useSharedValue<number>(0)

  const { adImages } = AdDetailsMock

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    })
  }

  return (
    <VStack bgColor="$amber300" h={windowWidth / 1.4}>
      <Carousel
        ref={carouselRef}
        data={adImages}
        width={windowWidth}
        height={windowWidth / 1.4}
        onScrollEnd={(index) => (progress.value = index)}
        renderItem={({ index }) => (
          <Image
            h={'$full'}
            w={'$full'}
            resizeMode={'cover'}
            alt={'Product photo'}
            source={{ uri: adImages[index] }}
          />
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={adImages}
        dotStyle={{
          width: (windowWidth - 16) / adImages.length,
          flex: 1,
          height: 4,
          borderRadius: 2,
          backgroundColor: '#F7F7F888',
        }}
        activeDotStyle={{
          width: (windowWidth - 16) / adImages.length,
          height: 4,
          borderRadius: 2,
          backgroundColor: '#F7F7F8',
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 5,
          columnGap: 4,
        }}
        onPress={onPressPagination}
        horizontal
      />
    </VStack>
  )
}
