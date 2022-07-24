import 'swiper/css/bundle'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { ImageCustomField } from '../types/work'

type ImageSliderProps = {
  images: ImageCustomField[]
}

SwiperCore.use([Pagination, Navigation]) 

const ImageSlider = (props: ImageSliderProps) => {
  const { images } = props
  return (
    <>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }}
        navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
      >
        {
          images.map((img: ImageCustomField, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={img.image.url}
                  layout="responsive"
                  width={640}
                  height={400}
                  objectFit={"contain"}
                  alt="test_image"
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default ImageSlider
