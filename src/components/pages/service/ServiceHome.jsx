import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { ServiceBanner } from './ServiceBanner';
import { ServiceAbout } from './ServiceAbout';
import OurService from './OurService';
import PopularProducts from './PopularProducts';
import { GetInTouch } from '../home/getInTouch/GetInTouch';

const ServiceHome = () => {
    return (
        <div>
            <Navbar />
            <ServiceBanner />
            <ServiceAbout />
            <OurService />
            <PopularProducts />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default ServiceHome;