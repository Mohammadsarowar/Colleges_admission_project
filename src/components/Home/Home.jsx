import React from 'react';
import SwiperFile from './Shared/Swiper/SwiperFile';
import About from './Shared/ExtaHomePage/About';
import Gallery from './Shared/ExtaHomePage/Gallery';



const Home = () => {
    return (
        <div>
       <SwiperFile/>
       <About/>
       <Gallery/>
        </div>
    );
};

export default Home;