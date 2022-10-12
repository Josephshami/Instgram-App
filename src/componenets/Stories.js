import React from "react";
import "../styles/stories.scss"
import Story from "./Story"
import 'swiper/css'; 
import { Swiper, SwiperSlide } from "swiper/react";

function Stories() {
  return (
    <div className="stories">
      <Swiper className="mySwiper" slidesPerView={5} >
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
        <SwiperSlide><Story/></SwiperSlide>
      </Swiper>
   
    </div>
  )
}

export default Stories
