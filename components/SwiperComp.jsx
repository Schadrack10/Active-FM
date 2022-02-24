import React from 'react'
import { Navigation,  Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const swiperStyles = {
   height:"230px",
   width:"100%",
   marginTop:"5px"
}
const swiperImg = {
  width:"100%",
  height:"100%",
  objectFit:"cover"
}


const SwiperComp = () => {
  return (
    <>
    <Swiper
         
           modules={[Navigation, Scrollbar, A11y, Autoplay]}
           autoplay={true}
           loop={true}
           direction={"vertical"}
           pagination={{
          clickable: false,
      }}
      className="mySwiper"
      style={swiperStyles}
    >
      <SwiperSlide><img style={swiperImg} src="Banner 1.png" alt="carousel-image" /></SwiperSlide>
      <SwiperSlide><img style={swiperImg} src="Banner 2.png" alt="carousel-image" /></SwiperSlide>
      <SwiperSlide><img style={swiperImg} src="Banner 3.png" alt="carousel-image" /></SwiperSlide>
    </Swiper>
      
      
      
      </>
  )
}

export default SwiperComp