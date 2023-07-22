
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const SwiperFile = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </SwiperSlide>
     
      </Swiper>  
        </div>
    );
};

export default SwiperFile;