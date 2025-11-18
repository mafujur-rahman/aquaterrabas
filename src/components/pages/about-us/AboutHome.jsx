import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { AboutBanner } from './AboutBanner';
import { Experience } from './Experience';
import { AboutStats } from './AboutStats';
import Portfolio from '../home/Portfolio/Portfolio';
import { Review } from './Review';
import { GetInTouch } from '../home/getInTouch/GetInTouch';

const AboutHome = () => {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <Experience />
            <AboutStats />
            <Portfolio />
            <Review />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default AboutHome;