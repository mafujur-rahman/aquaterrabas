import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { FAQBanner } from './FAQBanner';
import FAQArea from './FAQArea';
import { GetInTouch } from '../home/getInTouch/GetInTouch';

const FAQHome = () => {
    return (
        <div>
            <Navbar />
            <FAQBanner />
            <FAQArea />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default FAQHome;