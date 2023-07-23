
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const SwiperFile = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold font-mono">Admission Available</h1>
      <p className="mb-5 font-serif">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/admission' className="btn btn-primary">Admission Now</Link>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold font-mono">Wellcome to our college</h1>
      <p className="mb-5 font-serif">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/colleges' className="btn btn-primary">Colleges</Link>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="hero h-[600px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=600'}}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold font-mono">Admission Available</h1>
      <p className="mb-5 font-serif">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/admission' className="btn btn-primary">Admission Now</Link>
    </div>
  </div>
</div>

        </SwiperSlide>
     
      </Swiper>  
        </div>
    );
};

export default SwiperFile;