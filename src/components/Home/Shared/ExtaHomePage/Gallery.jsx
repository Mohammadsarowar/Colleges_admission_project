import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Gallery = () => {
    return (
        <div className="hero lg:my-10 lg:p-20 ">
        <div className="hero-content text-center ">
          <div className=" lg:w-full w-96 font-mono">
            <h1 className="text-5xl font-bold">Gallery there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <>
      <Swiper
       loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/3952080/pexels-photo-3952080.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/5966011/pexels-photo-5966011.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/6147161/pexels-photo-6147161.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='w-full h-full'></img>
        </SwiperSlide>
       
      </Swiper>
    </>  </div>
        </div>
      </div>
    );
};

export default Gallery;