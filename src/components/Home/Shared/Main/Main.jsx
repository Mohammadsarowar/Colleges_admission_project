import React from 'react';
import Navbar from '../../../Navber/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-137px)]">
      <Outlet />
     </div>
            <Footer/>
        </div>
    );
};

export default Main;