import "swiper/css/bundle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import { ImageCustomField } from "../types/work";

type ImageSliderProps = {
  images: ImageCustomField[];
};

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const ImageSlider = (props: ImageSliderProps) => {
  const { images } = props;
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        speed={3000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
      >
        {images.map((img: ImageCustomField, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={img.image.url}
                layout="responsive"
                width={960}
                height={540}
                objectFit={"contain"}
                alt="test_image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImageSlider;
