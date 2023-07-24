import React from 'react';
import SwiperFile from './Shared/Swiper/SwiperFile';
import About from './Shared/ExtaHomePage/About';
import Gallery from './Shared/ExtaHomePage/Gallery';
import Research from '../Research/Research';



const Home = () => {
    return (
        <div>
       <SwiperFile/>
       <About/>
       <Gallery/>
       <Research/>
        </div>
    );
};

export default Home;