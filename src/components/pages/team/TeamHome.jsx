import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';
import { TeamBanner } from './TeamBanner';
import Team from './Team';
import HelpSection from './HelpSection';
import Portfolio from '../home/Portfolio/Portfolio';
import { GetInTouch } from '../home/getInTouch/GetInTouch';

const TeamHome = () => {
    return (
        <div>
            <Navbar />
            <TeamBanner />
            <Team />
            <HelpSection />
            <Portfolio />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default TeamHome;