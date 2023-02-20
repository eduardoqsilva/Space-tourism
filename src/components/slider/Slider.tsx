
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'

import { ReactNode } from 'react'

interface SliderType {
  children: ReactNode
  settings: SwiperProps
}

export function Slider({ settings, children }:SliderType) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  )
}
