import { Rating } from "@material-tailwind/react";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import top from "./Top";
import Top_card from "./top_card";


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


function Top() {
    let k=3;
  return (
    <div className='h-[200vh] mt-20  bg-gray-100'>
      <div className='w-[87vw] flex m-auto gap-8 justify-between'>
        <div className='w-[27vw] h-[18vh] border-b-2'></div>
        <h1 className='mt-[12vh] text-center text-[38px]'>SHOP OUR BESTSELLER's</h1>
        <div className='w-[27vw] h-[18vh] border-b-2'></div>
      </div>

      <div className="h-[48vh] w-[90vw]  mx-auto">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Top_card/>
        </SwiperSlide>

      </Swiper>
      </div>

    </div>
  )
}

export default Top
