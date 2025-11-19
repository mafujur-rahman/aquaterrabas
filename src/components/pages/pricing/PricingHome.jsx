import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { PricingBanner } from './PricingBanner';
import PlanSection from './Plan';
import Achievement from '../home/Achievement/Achievement';
import { GetInTouch } from '../home/getInTouch/GetInTouch';
import HowWeWork from './HowWeWork';

const PricingHome = () => {
    return (
        <div>
            <Navbar />
            <PricingBanner />
            <PlanSection />
            <Achievement />
            <HowWeWork />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default PricingHome;